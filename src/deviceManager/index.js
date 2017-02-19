import axios from 'axios';
import { errorHandler } from '../utils';

const deviceManager = (base) => {
  base = `${base}/devices`;
  return ({
    /**
    * @summary Get the List all registered devices
    * @name getAll
    * @public
    * @function
    * @memberof agile.deviceManager
    * @fulfil {Array} - devices
    * @returns {Promise}
    * @example
    * agile.deviceManager.getAll().then(function(devices) {
    *   console.log(devices);
    * });
    **/
    getAll: () => axios({
      method: 'GET',
      url: `${base}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Get a device definition
    * @name get
    * @public
    * @function
    * @memberof agile.deviceManager
    * @param {String} deviceId - Agile device Id
    * @fulfil {Array} - devices
    * @returns {Promise}
    * @example
    * agile.deviceManager.get(deviceId).then(function(device) {
    *   console.log(device);
    * });
    **/
    get: (deviceId) => axios({
      method: 'GET',
      url: `${base}/${deviceId}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete a device definition and unregister it
    * @name delete
    * @public
    * @function
    * @memberof agile.deviceManager.devices
    * @param {String} deviceId - Agile device Id
    * @fulfil {undefined}
    * @returns {Promise}
    * @example
    * agile.deviceManager.delete(12345).then(function() {
    *   console.log(Device 12345 deleted);
    * });
    **/
    delete: (deviceId) => axios({
      method: 'DELETE',
      url: `${base}/${deviceId}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Register a new device based on information from ProtocolManager and device type
    * @name create
    * @public
    * @function
    * @memberof agile.deviceManager
    * @param {Object} deviceOverview
    * @param {type} string
    * @fulfil {Object} - device
    * @returns {Promise}
    * @example
    * agile.deviceManager.create(deviceObj, type).then(function(newDevice) {
    *  console.log(newDevice);
    * });
    **/
    create: (deviceOverview, type) => axios({
      method: 'POST',
      url: `${base}`,
      data: {
        overview: deviceOverview,
        type: type
      }
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Get matching types for a device overview
    * @name typeof
    * @public
    * @function
    * @memberof agile.deviceManager
    * @fulfil {Array} - deviceTypes
    * @param {Object} - deviceOverview
    * @returns {Promise}
    * @example
    * agile.deviceManager.typeof().then(function(deviceTypes) {
    *  console.log(deviceTypes);
    * });
    **/
    typeof: (deviceOverview) => axios({
      method: 'POST',
      url: `${base}/typeof`,
      data: deviceOverview
    })
    .then(res => (res.data))
    .catch(errorHandler)
  });
};

export default deviceManager;
