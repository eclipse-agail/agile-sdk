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
  * @param {Object} - including the api base url, idm base url (if not provided defaults to the same api host but default idm port), and a token.
  * @returns {Object}
  * @example
  * var agile = require('agile-sdk')({
      api:'http://agile-core:8080',
      idm: 'http://agile-core:3000',
      token: 'zIOycOqbEQh4ayw7lGAm9ILBIr'
    })
*/
const agileSDK = (params) => {
  // parse url to remove any irregularites
  const parsed = parseUrl(params.api);
  const apiBase = `${parsed.origin}/api`;
  const wsBase = `${parsed.set('protocol', 'ws:').origin}/ws`;
  const idmBase = params.idm?params.idm:`${parsed.set('port', 3000).origin}`;
  //for now we keep it as const... but token in the sdk should be updated once in a while, since it can expire.
  //for now we just create a new SDK object each time
  const token = params.token;
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
