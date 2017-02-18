import axios from 'axios';

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
    .then(res => (res.data)),
    /**
    * @summary Get a device definition
    * @name get
    * @public
    * @function
    * @memberof agile.deviceManager
    * @param {String} id - deviceId
    * @fulfil {Array} - devices
    * @returns {Promise}
    * @example
    * agile.deviceManager.get(id).then(function(device) {
    *   console.log(device);
    * });
    **/
    get: (id) => axios({
      method: 'GET',
      url: `${base}/${id}`
    })
    .then(res => (res.data)),
    /**
    * @summary Delete a device definition and unregister it
    * @name delete
    * @public
    * @function
    * @memberof agile.deviceManager.devices
    * @param {String} id - deviceId
    * @fulfil {undefined}
    * @returns {Promise}
    * @example
    * agile.deviceManager.delete(12345).then(function() {
    *   console.log(Device 12345 deleted);
    * });
    **/
    delete: (id) => axios({
      method: 'DELETE',
      url: `${base}/${id}`
    })
    .then(res => (res.data)),
    /**
    * @summary Register a new device based on information from ProtocolManager and device type
    * @name create
    * @public
    * @function
    * @memberof agile.deviceManager
    * @param {Object} device
    * @param {type} string
    * @fulfil {Object} - device
    * @returns {Promise}
    * @example
    * agile.deviceManager.create(deviceObj).then(function(newDevice) {
    *  console.log(newDevice);
    * });
    **/
    create: (device, type) => axios({
      method: 'POST',
      url: `${base}`,
      data: {
        overview: device,
        type: type
      }
    })
    .then(res => (res.data)),
    /**
    * @summary Get matching types for a device overview
    * @name typeof
    * @public
    * @function
    * @memberof agile.deviceManager
    * @fulfil {Array} - deviceTypes
    * @returns {Promise}
    * @example
    * agile.deviceManager.typeof().then(function(deviceTypes) {
    *  console.log(deviceTypes);
    * });
    **/
    typeof: (device, type) => axios({
      method: 'GET',
      url: `${base}/typeof`,
      data: {
        overview: device,
        type: type
      }
    })
    .then(res => (res.data))
  });
};

export default deviceManager;
