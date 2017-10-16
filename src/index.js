import protocolManager from './protocolManager';
import deviceManager from './deviceManager';
import device from './device';
import protocol from './protocol';
import idm from './idm';
import data from './data';
import policies from './policies';
import audit from './audit';

import parseUrl from 'url-parse';
import clone from 'lodash/clone';
import { tokenSet, tokenDelete, tokenGet } from './utils';
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
      data: 'http://agile-data:1338',
      token: 'zIOycOqbEQh4ayw7lGAm9ILBIr'
    })
*/
const agileSDK = (params) => {
  // backwards compatibility
  if (typeof params === 'string' || params instanceof String) {
    params = {api: params};
  }
  // parse url to remove any irregularites
  const parsed = parseUrl(params.api);
  const apiBase = params.api.indexOf('/') === 0 ? `${params.api}/api` : `${parsed.origin}/api`;
  const idmBase = params.idm ? params.idm : `${clone(parsed).set('port', 3000).origin}`;
  const dataBase = params.data ? params.data : `${clone(parsed).set('port', 1338).origin}`;
  const wsBase = `${clone(parsed).set('protocol', 'ws:').origin}/ws`;
  // for now we keep it as const... but token in the sdk should be updated once in a while, since it can expire.
  // for now we just create a new SDK object each time
  const token = tokenSet(params.token);
  return ({
    /**
    * @summary Set/Update Idm Authentication token
    * @name tokenSet
    * @public
    * @function
    * @memberof agile
    * @param {String} token - Idm Authentication token
    * @returns {String} token - Newly set Idm Authentication token
    * @example
    * agile.tokenSet('1234');
    **/
    tokenSet: tokenSet,
    /**
    * @summary Get Idm Authentication token
    * @name tokenGet
    * @public
    * @function
    * @memberof agile
    * @returns {String}
    * @example
    * agile.tokenGet();
    **/
    tokenGet: tokenGet,
    /**
    * @summary Unset/delete Idm Authentication token
    * @name tokenDelete
    * @public
    * @function
    * @memberof agile
    * @returns {String}
    * @example
    * agile.tokenDelete();
    **/
    tokenDelete: tokenDelete,
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
    idm: idm(idmBase),
    /**
    * @namespace data
    * @memberof agile
    **/
    data: data(dataBase),
    /**
    * @namespace policies
    * @memberof agile
    **/
    policies: policies(idmBase, token),
    /**
    * @namespace audit
    * @memberof agile
    **/
    audit: audit(idmBase, token)

  });
};

module.exports = agileSDK;
