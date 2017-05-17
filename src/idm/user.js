import axios from 'axios';
import { errorHandler } from '../utils';

const idm = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @summary Get the user information
    * @name getUserInfo
    * @public
    * @function
    * @memberof agile.idm
    * @fulfil {Object} userInfo - object with user information
    * @returns {Promise}
    * @example
    * agile.id.getuserInfo().then(function(info) {
    *  console.log(info);
    * });
    **/
    getUserInfo: () => axios({
      method: 'GET',
      url: `${base}/oauth2/api/userinfo`,
      headers: {"Authorization":`bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary List all groups
    * @name getGroups
    * @public
    * @function
    * @memberof agile.idm
    * @fulfil {Array} all groups
    * @returns {Promise}
    * @example
    * agile.idm.getGroups().then(function(groups) {
    *   console.log(groups);
    * });
    **/
    getGroups: () => {
      let url = `${base}/api/v1/group`;
      return axios({
        method: 'GET',
        url: url,
        headers: {"Authorization":`bearer ${token}`}
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Create a group onwned by the authenticated user
    * @name createGroup
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} groupName - Name of the group
    * @fulfil {Object} group created
    * @returns {Promise}
    * @example
    * agile.device.createGroup('ble-devices').then(function(group) {
    *   console.log('group created!'+group);
    * });
    **/
    createGroup: (name) => axios({
      method: 'POST',
      url: `${base}/api/v1/group/`,
      headers: {"Authorization" : `bearer ${token}`},
      data: {"group_name" : name}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete a group
    * @name deleteGroup
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} owner - Owner of the group
    * @param {String} groupName - Name of the group
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.deleteGroup('my-group').then(function() {
    *   console.log('group removed!');
    * });
    **/
    deleteGroup: (owner, name) => axios({
      method: 'DELETE',
      url: `${base}/api/v1/user/${owner}/group/${name}`,
      headers: {"Authorization" : `bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Perform an action on the device
    * @name execute
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @param {String} command - Operation name to be performed
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.device.execute('bleB0B448BE5084', command).then(function() {
    *   console.log(`executed ${command}!``);
    * });
    **/
    execute: (deviceId, command) => axios({
      method: 'GET',
      url: `${base}/${deviceId}/execute/${command}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Get the last record fetched from the device or component
    * @name lastUpdate
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @param {String} [componentId] - Agile component name, like a sensor
    * @fulfil {Object|Array} Single Component readings returned as object, Device readings returned as Array of Objects.
    * @returns {Promise}
    * @example
    * agile.device.lastUpdate('bleB0B448BE5084', 'Temperature').then(function(temperatureReading) {
    *  console.log(temperatureReading);
    * });

    * @example
    * agile.device.lastUpdate('bleB0B448BE5084').then(function(componentsReading) {
    *  console.log(componentsReading);
    * });
    **/
    lastUpdate: (deviceId, componentId) => {
      let url = `${base}/${deviceId}/lastUpdate`;
      if (componentId) {
        url = `${base}/${deviceId}/${componentId}/lastUpdate`;
      }

      return axios({
        method: 'GET',
        url: url
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Enable a subscription to a data stream. Asynchronous data updates will be delivered via websocket.
    * @name subscribe
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @param {String} componentId - Operation name to be performed
    * @fulfil {Object} - websocket instance - https://www.w3.org/TR/websockets/
    * @returns {Promise}
    * @example
    * agile.device.subscribe('bleB0B448BE5084', 'Temperature').then(function(stream) {
    *   stream.onerror = () => {
    *    console.log('Connection Error');
    *  };
    *
    *  stream.onopen = () => {
    *    console.log('WebSocket Client Connected');
    *  };
    *
    *  stream.onclose = () => {
    *    console.log('echo-protocol Client Closed');
    *  };
    *
    *  stream.onmessage = (e) => {
    *    if (typeof e.data === 'string') {
    *      console.log("Received: '" + e.data + "'");
    *    }
    *  };
    * });
    **/
    subscribe: (deviceId, componentId) => {
      return new Promise(function (resolve, reject) {
        resolve(new WS(`${wsBase}/${deviceId}/${componentId}/subscribe`));
      });
    },
    /**
    * @summary Unsubscribe from a data stream
    * @name unsubscribe
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @param {String} componentId - Agile component name, like a sensor
    * @fulfil {undefined}
    * @returns {Promise}
    * @example
    * agile.device.get('bleB0B448BE5084', 'Temperature').then(function() {
    *  console.log('Unsubscribed!');
    * });
    **/
    unsubscribe: (deviceId, componentId) => axios({
      method: 'DELETE',
      url: `${base}/${deviceId}/${componentId}/subscribe`
    })
    .then(res => (res.data))
    .catch(errorHandler)
  });
};

export default idm;
