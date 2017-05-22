import protocolManager from './protocolManager';
import deviceManager from './deviceManager';
import device from './device';
import protocol from './protocol';
import idm from './idm';
import parseUrl from 'url-parse';
/**
  * @namespace agile
  * @description
  * Welcome to the Agile SDK documentation.
  *
  * This document aims to describe all the functions supported by the SDK, as well as showing examples of their expected usage.
  *
  * If you feel something is missing, not clear or could be improved, please don't hesitate to open an [issue in GitHub](https://github.com/agile-iot/agile-sdk/issues/new), we'll be happy to help.
  * @param {string} - agile-core REST API endpoint
  * @param {string} - agile-idm REST API endpoint
  * @param {string} - agile-idm token
  * @returns {Object}
  * @example
  * var agile = require('agile-sdk')('http://agile-core:8080','http://agile-core:3000','zIOycOqbEQh4ayw7lGAm9ILBIr')
*/
const agileSDK = (base,idmBase, token) => {
  // parse url to remove any irregularites
  const parsed = parseUrl(base);
  const apiBase = `${parsed.origin}/api`;
  const wsBase = `${parsed.set('protocol', 'ws:').origin}/ws`;
  return ({
    /**
    * @namespace protocolManager
    * @memberof agile
    **/
    protocolManager: protocolManager(apiBase),
    /**
    * @namespace deviceManager
    * @memberof agile
    **/
    deviceManager: deviceManager(apiBase),
    /**
    * @namespace device
    * @memberof agile
    **/
    device: device(apiBase, wsBase),
    /**
    * @namespace protocol
    * @memberof agile
    **/
    protocol: protocol(apiBase),
    /**
    * @namespace idm
    * @memberof agile
    **/
    idm: idm(idmBase, token)
  });
};

module.exports = agileSDK;
