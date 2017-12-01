import axios from 'axios';

const deviceManager = (base) => {
  base = `${base}/devices`;
  return ({
    /**
    * @summary Get all or single device definition
    * @name get
    * @public
    * @function
    * @memberof agile.deviceManager
    * @param {String} [deviceId] - Agile device Id
    * @fulfil {Array} - devices
    * @returns {Promise}
    * @example
    * agile.deviceManager.get('bleB0B448BE5084').then(function(device) {
    *   console.log(device);
    * });
    **/
    get: (deviceId) => {
      let url = `${base}`;
      if (deviceId) {
        url = `${base}/${deviceId}`;
      }
      return axios({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary Delete a device definition and unregister it
    * @name delete
    * @public
    * @function
    * @memberof agile.deviceManager
    * @param {String} deviceId - Agile device Id
    * @fulfil {undefined}
    * @returns {Promise}
    * @example
    * agile.deviceManager.delete('bleB0B448BE5084').then(function() {
    *   console.log('Device bleB0B448BD1085 deleted');
    * });
    **/
    delete: (deviceId) => axios({
      method: 'DELETE',
      url: `${base}/${deviceId}`
    }),
    /**
    * @summary Register a new device based on information from ProtocolManager and device type
    * @name create
    * @public
    * @function
    * @memberof agile.deviceManager
    * @param {Object} deviceOverview
    * @param {string} type
    * @fulfil {Object} - device
    * @returns {Promise}
    * @example
    * const deviceOverview = {
    *   "name": "CC2650 SensorTag",
    *   "protocol": "iot.agile.protocol.BLE",
    *   "id": "B0:B4:48:BD:10:85",
    *   "status": "CONNECTED"
    * };
    * const type = "TI SensorTag";
    *
    * agile.deviceManager.create(deviceOverview, type).then(function(newDevice) {
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
    }),
    /**
    * @summary Get matching types for a device overview
    * @name typeof
    * @public
    * @function
    * @memberof agile.deviceManager
    *
    * @param {Object} deviceOverview
    * @fulfil {Array} - deviceTypes
    * @returns {Promise}
    * @example
    * const deviceOverview = {
    *   "name": "CC2650 SensorTag",
    *   "protocol": "iot.agile.protocol.BLE",
    *   "id": "B0:B4:48:BD:10:85",
    *   "status": "CONNECTED"
    * };
    *
    * agile.deviceManager.typeof(deviceOverview).then(function(deviceTypes) {
    *  console.log(deviceTypes);
    * });
    **/
    typeof: (deviceOverview) => axios({
      method: 'POST',
      url: `${base}/typeof`,
      data: deviceOverview
    })
  });
};

export default deviceManager;
