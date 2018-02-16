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
import discovery from './discovery';

const protocolManager = (base) => {
  base = `${base}/protocols`;
  return ({
    /**
    * @summary Get the list of registered protocols
    * @name get
    * @public
    * @function
    * @memberof agile.protocolManager
    * @fulfil {Array} - protocols
    * @returns {Promise}
    * @example
    * agile.protocolManager.protocols.get().then(function(protocols) {
    *   console.log(protocols);
    * });
    **/
    get: () => axios({
      method: 'GET',
      url: `${base}`
    }),
    /**
    * @summary Unregister a Dbus Protocol object reference
    * @name delete
    * @public
    * @function
    * @memberof agile.protocolManager
    *
    * @param {String} protocolId - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.protocols.delete(protocolId).then(function() {
    *   console.log('protocol has been unregistered');
    * });
    **/
    delete: () => axios({
      method: 'DELETE',
      url: `${base}`
    }),
    /**
    * @summary Register a new Dbus object implementing the protocol API
    * @name create
    * @public
    * @function
    * @memberof agile.protocolManager
    *
    * @param {String} protocolId - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.protocols.create(protocolId).then(function() {
    *   console.log('protocol has been registered');
    * });
    **/
    status: () => axios({
      method: 'POST',
      url: `${base}`
    }),
    /**
    * @summary List all discovered devices on all available protocols
    * @name devices
    * @public
    * @function
    * @memberof agile.protocolManager
    *
    * @fulfil {Array} - devices
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.devices().then(function(devices) {
    *  console.log(devices);
    * });
    **/
    devices: () => axios({
      url: `${base}/devices`
    }),
    /**
    * @namespace discovery
    * @memberof agile.protocolManager
    **/
    discovery: discovery(base)
  });
};

export default protocolManager;
