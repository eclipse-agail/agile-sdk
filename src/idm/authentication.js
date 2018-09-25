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
      let url = `${base}/oauth2/token`;
      return axios.request({
        method: 'POST',
        url: url,
        auth: {
          username: client,
          password: secret
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: { grant_type: 'client_credentials' }
      });
    }
  },{
  /**
  * @summary Authenticate a user for a particular client (application) relying on agile-security for user authentication.
  * @name authenticateUser
  * @public
  * @function
  * @memberof agile.idm.authentication
  * @param {String} client - client name. This is the client name provided to the create Entity when you register an Oauth2 client in AGILE-IDM. For more info: https://github.com/Agile-IoT/agile-idm-oauth2-client-example
  * @param {String} secret - client secret. This is the client name provided to the create Entity when you register an Oauth2 client in AGILE-IDM. For more info: https://github.com/Agile-IoT/agile-idm-oauth2-client-example
  * @param {String} username - username for agile-local user
  * @param {String} password - password for the agile-local user
  * @fulfil {Object} Authentication information including token_type and access_token
  * @returns {Promise}
  * @example
  * agile.idm.authentication.authenticateUser('MyAgileClient2','WLnhhc3LnesbYj0GspNA13zgJEroN8V', 'agile', 'secret').then(function(result) {
  *   console.log(credentials.access_token);
  *   console.log(credentials.token_type);
  * });
  **/
  authenticateUser: (client, secret, username, password) => {
    let url = `${base}/oauth2/token`;
    return axios.request({
      method: 'POST',
      url: url,
      auth: {
        username: client,
        password: secret
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        grant_type: 'password',
        username: username,
        password : password
      }
    });
  }
  });
};

export default entity;
