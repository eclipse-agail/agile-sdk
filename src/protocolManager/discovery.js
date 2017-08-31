import axios from 'axios';
import { errorHandler } from '../utils';

const discovery = (base) => {
  const protocolBase = base.slice(0, -1);
  base = `${base}/discovery`;
  return ({
    /**
    * @summary Start device discovery on all or single protocol
    * @name start
    * @public
    * @function
    * @memberof agile.protocolManager.discovery
    * @param [protocolId] - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.discovery.start().then(function() {
    *   console.log('All protocols discovery is on');
    * });
    * agile.protocolManager.discovery.start('Bluetooth LE').then(function() {
    *   console.log('Bluetooth LE protocols discovery is on');
    * });
    **/
    start: (protocolId) => {
      let url = base;
      if (protocolId) {
        url = `${protocolBase}/${protocolId}/discovery`;
      }
      return axios({
        method: 'POST',
        url: url
      });
    },
    /**
    * @summary Stop device discovery on all or single protocol
    * @name stop
    * @public
    * @function
    * @memberof agile.protocolManager.discovery
    *
    * @param [protocolId] - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.discovery.stop().then(function() {
    *   console.log('All protocols discovery is off');
    * });
    * agile.protocolManager.discovery.stop('Bluetooth LE').then(function() {
    *   console.log('Bluetooth LE discovery is off');
    * });
    **/
    stop: (protocolId) => {
      let url = base;
      if (protocolId) {
        url = `${protocolBase}/${protocolId}/discovery`;
      }
      return axios({
        method: 'DELETE',
        url: url
      });
    },
    /**
    * @summary Return the status object of discovery on the all or single protocol
    * @name status
    * @public
    * @function
    * @memberof agile.protocolManager.discovery
    *
    * @param [protocolId] - Agile protocol Id
    * @fulfil {Array|Object}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.discovery.status().then(function(protocols) {
    *   console.log(protocols);
    * });
    * agile.protocolManager.discovery.status('Bluetooth LE').then(function(protocol) {
    *   console.log(protocol.status);
    * });
    **/
    status: (protocolId) => {
      let url = base;
      if (protocolId) {
        url = `${protocolBase}/${protocolId}/discovery`;
      }
      return axios({
        method: 'GET',
        url: url
      });
    }
  });
};

export default discovery;
