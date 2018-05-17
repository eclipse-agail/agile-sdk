/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import axios from 'axios';

const WS = require('websocket').w3cwebsocket;
const WEB_SOCKETS = {};

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
    * agile.device.status('bleB0B448BE5084').then(function(status) {
    *  console.log(status);
    * });
    **/
    status: (deviceId) => axios({
      method: 'GET',
      url: `${base}/${deviceId}/status`
    })
    .then(data => {
      return data.status;
    }),
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
    * agile.device.get('bleB0B448BE5084').then(function(deviceComponents) {
    *   console.log(deviceComponents);
    * });
    * @example
    * agile.device.get('bleB0B448BE5084', 'Temperature').then(function(deviceComponent) {
    *   console.log(deviceComponent);
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
      });
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
    * agile.device.connect('bleB0B448BE5084').then(function() {
    *   console.log('Connected!');
    * });
    **/
    connect: (deviceId) => axios({
      method: 'POST',
      url: `${base}/${deviceId}/connection`
    }),
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
    * agile.device.disconnect('bleB0B448BE5084').then(function() {
    *   console.log('Disconnected!');
    * });
    **/
    disconnect: (deviceId) => axios({
      method: 'DELETE',
      url: `${base}/${deviceId}/connection`
    }),
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
      method: 'POST',
      url: `${base}/${deviceId}/execute/${command}`
    }),
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
      });
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
      const id = deviceId + componentId;
      if (!WEB_SOCKETS.hasOwnProperty(id)) {
        try {
          WEB_SOCKETS[id] = new WS(`${wsBase}/${deviceId}/${componentId}/subscribe`);
        } catch (err) {
          Promise.reject(err);
        }
      }
      return Promise.resolve(WEB_SOCKETS[id]);
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
    * agile.device.unsubscribe('bleB0B448BE5084', 'Temperature').then(function() {
    *  console.log('Unsubscribed!');
    * });
    **/
    unsubscribe: (deviceId, componentId) => {
      const id = deviceId + componentId;
      if (WEB_SOCKETS.hasOwnProperty(id)) {
        try {
          WEB_SOCKETS[id].close();
          delete WEB_SOCKETS[id];
        } catch (err) {
          Promise.reject(err);
        }
      } else {
        return Promise.reject(new Error('No websocket registered, ensure you run .subscribe before .unsubscribe'));
      }
      return Promise.resolve();
    }
  });
};

export default device;
