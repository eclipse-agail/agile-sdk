import axios from 'axios';
import { errorHandler, getWS } from '../utils';

const WS = getWS();

const device = (base, wsBase) => {
  base = `${base}/device`;
  wsBase = `${wsBase}/device`;
  return ({
    /**
    * @summary Get the device status
    * @name status
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @fulfil {String} - status
    * @returns {Promise}
    * @example
    * agile.device.status(deviceId).then(function(status) {
    *  console.log(status);
    * });
    **/
    status: (deviceId) => axios({
      method: 'GET',
      url: `${base}/${deviceId}/status`
    })
    .then(res => (res.data.status))
    .catch(errorHandler),
    /**
    * @summary Read values of all components from the device
    * @name get
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @param {String} [componentId] - Agile component name, like a sensor
    * @fulfil {Object|Array} Single Component readings returned as object, Device readings returned as Array of Objects.
    * @returns {Promise}
    * @example
    * agile.device.get(deviceId).then(function(deviceComponents) {
    *   console.log(deviceComponents);
    * });
    * @example
    * agile.device.get(deviceId, componentId).then(function(deviceComponents) {
    *   console.log(deviceComponents);
    * });
    **/
    get: (deviceId, componentId) => {
      let url = `${base}/${deviceId}`;
      if (componentId) {
        url = `${base}/${deviceId}/${componentId}`;
      }
      return axios({
        method: 'GET',
        url: url
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Connect the device at protocol level
    * @name connect
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.device.connect(deviceId).then(function() {
    *   console.log('Connected!');
    * });
    **/
    connect: (deviceId) => axios({
      method: 'POST',
      url: `${base}/${deviceId}/connection`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Disconnect device at protocol level
    * @name disconnect
    * @public
    * @function
    * @memberof agile.device
    * @param {String} deviceId - Agile device Id
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.device.disconnect(deviceId).then(function() {
    *   console.log('Disconnected!');
    * });
    **/
    disconnect: (deviceId) => axios({
      method: 'DELETE',
      url: `${base}/${deviceId}/connection`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Perform an action on the device
    * @name execute
    * @public
    * @function
    * @memberof agile.device
    * @param {String} id - Agile device Id
    * @param {String} command - Operation name to be performed
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.device.connect(id, command).then(function() {
    *   console.log('Connected!');
    * });
    **/
    execute: (id, command) => axios({
      method: 'GET',
      url: `${base}/${id}/execute/${command}`
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
    * agile.device.lastUpdate('123', 'Temperature').then(function(temperatureReading) {
    *  console.log(temperatureReading);
    * });

    * @example
    * agile.device.lastUpdate(deviceId).then(function(componentsReading) {
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
    * agile.device.execute(deviceId, componentId).then(function(stream) {
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
    * @param {String} [componentId] - Agile component name, like a sensor
    * @fulfil {undefined}
    * @returns {Promise}
    * @example
    * agile.device.get(deviceId).then(function(deviceComponents) {
    *  console.log(deviceComponents);
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

export default device;
