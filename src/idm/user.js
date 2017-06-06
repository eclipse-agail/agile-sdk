import axios from 'axios';
import { errorHandler } from '../utils';
import parseUrl from 'url-parse';

const idm = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { 'Authorization' : `bearer ${token}`}
  });

  return ({
    /**
    * @summary Get the user information for the user currnelty logged in, i.e. token provided when agileSDK was created
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
      url: `${base}/oauth2/api/userinfo`,
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Show information for a particular user by username and authentication type
    * @name get
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} user_name user name
    * @param {String} auth_type authentication type
    * @fulfil {Object} user found
    * @returns {Promise}
    * @example
    * agile.idm.user.get('alice','agile-local').then(function(user) {
    *   console.log(user);
    * });
    **/
    get: (user_name, auth_type) => {
      return instance.request({
        method: 'GET',
        url: `${base}/api/v1/user/`,
        params: {'auth_type': auth_type, 'user_name': user_name}
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
    * @param {object} including user_name user name
    * @param {String} auth_type authentication type
    * @param [Object] options continaing  role  of the user as 'role' and password as 'password'
    * @fulfil {Object} user created
    * @returns {Promise}
    * @example
    * agile.idm.user.create('bob','agile-local',{'role':'admin', 'password':'secret'}).then(function(user) {
    *   console.log('user created!'+user);
    * });
    **/
    create: (user_name, auth_type, options) => {
      var user = {
        'auth_type': auth_type,
        'user_name': user_name
      };
      if(options && options.role){
        user.role = options.role;
      }
      if(options && options.password){
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
    * @param {String} user_name user name
    * @param {String} auth_type authentication type
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.delete('bob','agile-local').then(function() {
    *   console.log('user removed!');
    * });
    **/
    delete: (user_name, auth_type) => {

      return instance.request({
        method: 'DELETE',
        url: `${base}/api/v1/user/`,
        params: {'auth_type': auth_type, 'user_name': user_name}
      })
      .then(res => (res))
      .catch(errorHandler);
    }

  });
};

export default idm;
