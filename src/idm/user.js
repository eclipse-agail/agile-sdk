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
import { errorHandler } from '../utils';

const idm = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { 'Authorization': `bearer ${token}` }
  });

  return ({
    /**
    * @summary Get the user information for the user currently logged in, i.e. token provided when agileSDK was created
    * @name getCurrentUserInfo
    * @public
    * @function
    * @memberof agile.idm.user
    * @fulfil {Object} userInfo - object with user information
    * @returns {Promise}
    * @example
    * agile.idm.user.getCurrentUserInfo().then(function(info) {
    *  console.log(info);
    * });
    **/
    getCurrentUserInfo: () => instance.request({
      method: 'GET',
      url: `${base}/oauth2/api/userinfo`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Show information for a particular user by username and authentication type
    * @name get
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} userName user name
    * @param {String} authType authentication type
    * @fulfil {Object} user found
    * @returns {Promise}
    * @example
    * agile.idm.user.get('alice','agile-local').then(function(user) {
    *   console.log(user);
    * });
    **/
    get: (userName, authType) => {
      return instance.request({
        method: 'GET',
        url: `${base}/api/v1/user/`,
        params: {'auth_type': authType, 'user_name': userName}
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Create user
    * @name create
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {object} including userName user name
    * @param {String} authType authentication type
    * @param {Object} [options] continaing  role  of the user as 'role' and password as 'password'
    * @fulfil {Object} user created
    * @returns {Promise}
    * @example
    * agile.idm.user.create('bob','agile-local',{'role':'admin', 'password':'secret'}).then(function(user) {
    *   console.log('user created!'+user);
    * });
    **/
    create: (userName, authType, options) => {
      var user = {
        'auth_type': authType,
        'user_name': userName
      };
      if (options && options.role) {
        user.role = options.role;
      }
      if (options && options.password) {
        user.password = options.password;
      }
      return instance.request({
        method: 'POST',
        url: `${base}/api/v1/user/`,
        data: user
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Delete a user
    * @name delete
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} userName user name
    * @param {String} authType authentication type
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.delete('bob','agile-local').then(function() {
    *   console.log('user removed!');
    * });
    **/
    delete: (userName, authType) => {
      return instance.request({
        method: 'DELETE',
        url: `${base}/api/v1/user/`,
        params: {'auth_type': authType, 'user_name': userName}
      })
      .then(res => (res))
      .catch(errorHandler);
    }

  });
};

export default idm;
