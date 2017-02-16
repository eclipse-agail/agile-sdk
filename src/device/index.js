import axios from 'axios';

const device = (base) => {
  base = `${base}/devices`
  return ({
    /**
    @summary Get the device status
    @name status
    @public
    @function
    @memberof agile.device
    @param {String} id - Agile device Id
    @fulfil {String} - status
    @returns {Promise}
    @example
    agile.device.status(id).then(function(status) {
      console.log(status);
    });
    **/
    status: (id) => axios({
      method: 'GET',
      url: `${base}/${id}/status`,
    })
    .then(res => (res.data.status)),
    /**
    @summary Read values of all components from the device
    @name get
    @public
    @function
    @memberof agile.device
    @param {String} id - Agile device Id
    @fulfil {Array} - deviceComponents
    @returns {Promise}
    @example
    agile.device.get(id).then(function(deviceComponents) {
      console.log(deviceComponents);
    });
    **/
    get: (id) => axios({
      method: 'GET',
      url: `${base}/${id}`,
    })
    .then(res => (res.data)),
    /**
    @summary Disconnect device at protocol level
    @name disconnect
    @public
    @function
    @memberof agile.device
    @param {String} id - Agile device Id
    @fulfil {Undefined}
    @returns {Promise}
    @example
    agile.device.disconnect(id).then(function() {
      console.log('Disconnected!');
    });
    **/
    disconnect: (id) => axios({
      method: 'GET',
      url: `${base}/${id}/connection`,
    })
    .then(res => (res.data)),
    /**
    @summary Connect the device at protocol level
    @name connect
    @public
    @function
    @memberof agile.device
    @param {String} id - Agile device Id
    @fulfil {Undefined}
    @returns {Promise}
    @example
    agile.device.connect(id).then(function() {
      console.log('Connected!');
    });
    **/
    disconnect: (id) => axios({
      method: 'GET',
      url: `${base}/${id}/connection`,
    })
    .then(res => (res.data)),
    /**
    @summary Perform an action on the device
    @name execute
    @public
    @function
    @memberof agile.device
    @param {String} id - Agile device Id
    @param {String} command - Operation name to be performed
    @fulfil {Undefined}
    @returns {Promise}
    @example
    agile.device.connect(id, command).then(function() {
      console.log('Connected!');
    });
    **/
    execute: (id, command) => axios({
      method: 'GET',
      url: `${base}/${id}/execute/${command}`,
    })
    .then(res => (res.data)),
    /**
    @summary Perform an action on the device
    @name execute
    @public
    @function
    @memberof agile.device
    @param {String} id - Agile device Id
    @param {String} command - Operation name to be performed
    @fulfil {Undefined}
    @returns {Promise}
    @example
    agile.device.connect(id, command).then(function() {
      console.log('Connected!');
    });
    **/
    execute: (id, command) => axios({
      method: 'GET',
      url: `${base}/${id}/execute/${command}`,
    })
    .then(res => (res.data)),
    /**
    @summary Get the last record fetched from the device
    @name lastUpdate
    @public
    @function
    @memberof agile.device
    @param {String} id - Agile device Id
    @fulfil {Undefined}
    @returns {Promise}
    @example
    agile.device.connect(id, command).then(function() {
      console.log('Connected!');
    });
    **/
    execute: (id, command) => axios({
      method: 'GET',
      url: `${base}/${id}/execute/${command}`,
    })
    .then(res => (res.data)),
  })
}

export default deviceManager;
