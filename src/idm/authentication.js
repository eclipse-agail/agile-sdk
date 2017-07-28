/*******************************************************************************
 *Copyright (C) 2017 Resin.io, UNI Passau.
 *All rights reserved. This program and the accompanying materials
 *are made available under the terms of the Eclipse Public License v1.0
 *which accompanies this distribution, and is available at
 *http://www.eclipse.org/legal/epl-v10.html
 *
 *Contributors:
 *    Resin.io, UNI Passau - initial API and implementation
 ******************************************************************************/
import axios from 'axios';
import qs from 'qs';
import { errorHandler } from '../utils';

const entity = (base, token) => {
  base = `${base}`;

  return ({
    /**
    * @summary Authenticate a client with client secret and client name.
    * @name authenticateClient
    * @public
    * @function
    * @memberof agile.idm.authentication
    * @param {String} client - client name. This is the client name provided to the create Entity when you register an Oauth2 client in AGILE-IDM. For more info: https://github.com/Agile-IoT/agile-idm-oauth2-client-example
    * @param {String} secret - client secret. This is the client name provided to the create Entity when you register an Oauth2 client in AGILE-IDM. For more info: https://github.com/Agile-IoT/agile-idm-oauth2-client-example
    * @fulfil {Object} Authentication information including token_type and access_token
    * @returns {Promise}
    * @example
    * agile.idm.authentication.authenticateClient('MyAgileClient2','WLnhhc3LnesbYj0GspNA13zgJEroN8V').then(function(result) {
    *   console.log(credentials.access_token);
    *   console.log(credentials.token_type);
    * });
    **/
    authenticateClient: (client, secret) => {
      // hack See https://github.com/mzabriskie/axios/issues/362
      var instance = axios.create({
        data: {}
      });
      let url = `${base}/oauth2/token`;
      return instance.request({
        method: 'POST',
        url: url,
        auth: {
          username: client,
          password: secret
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({grant_type: 'client_credentials'})
      })
      .then(res => (res.data))
      .catch(errorHandler);
    }
  });
};

export default entity;
