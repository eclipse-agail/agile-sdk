/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/

import axios from 'axios'

const configuration = base => {
  base = `${base}/protocolconfig`
  return {
    /**
     * @summary Get configuration options advertised by the protocol implementation
     * @name get
     * @public
     * @function
     * @memberof agile.protocolManager.protocolManager.configuration
     * @param {String} protocolId - Agile protocol Id
     * @fulfil {Array} - Configuration options for protocol
     * @returns {Promise}
     *
     * @example
     * agile.protocolManager.configuration.get(protocolId).then(function(options) {
     *   console.log(options);
     * });
     **/
    get: protocolId => {
      return axios({
        method: 'GET',
        url: `${base}/${protocolId}`
      })
    },

    /**
     * @summary
     * @name get
     * @public
     * @function
     * @memberof agile.protocolManager.protocolManager.configuration
     * @param {String} protocolId - Agile protocol Id
     * @param {Array} configuration - Configuration options to update
     * @fulfil {null}
     * @returns {Promise}
     *
     * @example
     * agile.protocolManager.configuration.set(protocolId, [{
     *   "key": "",
     *   "value": "Random first",
     *   "name": "Protocol Name",
     *   "description": "The name of the protocol",
     *   "mandatory": true,
     *   "default_value": "0",
     *   "type": "string",
     *   "valid_values": ""
     * }]).then(function(options) {
     *   console.log(options);
     * });
     **/
    set: (protocolId, configuration) => {
      return axios({
        method: 'POST',
        url: `${base}/${protocolId}`,
        data: configuration
      })
    }
  }
}

export default configuration
