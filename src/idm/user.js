import axios from 'axios';
import { errorHandler } from '../utils';
import parseUrl from 'url-parse';

const idm = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @summary Get the user information
    * @name getUserInfo
    * @public
    * @function
    * @memberof agile.idm.user
    * @fulfil {Object} userInfo - object with user information
    * @returns {Promise}
    * @example
    * agile.idm.user.getuserInfo().then(function(info) {
    *  console.log(info);
    * });
    **/
    getUserInfo: () => axios({
      method: 'GET',
      url: `${base}/oauth2/api/userinfo`,
      headers: {"Authorization":`bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Show information for a particular user
    * @name getuser
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} user_name user name
    * @param {String} auth_type authentication type
    * @fulfil {Object} user found
    * @returns {Promise}
    * @example
    * agile.idm.user.getuser("alice","agile-local").then(function(user) {
    *   console.log(user);
    * });
    **/
    getUser: (user_name, auth_type) => {
      var parsed = parseUrl(`${base}/api/v1/user/`);
      parsed.set("query",{'auth_type': auth_type, 'user_name': user_name});
      let url = parsed.toString();
      return axios({
        method: 'GET',
        url: url,
        headers: {"Authorization":`bearer ${token}`}
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Create user
    * @name createUser
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} user_name user name
    * @param {String} auth_type authentication type
    * @param [Object] options continaing  role  of the user as "role" and password as "password"
    * @fulfil {Object} user created
    * @returns {Promise}
    * @example
    * agile.idm.user.createUser('bob','agile-local',{"role":"admin", "password":"secret"}).then(function(user) {
    *   console.log('user created!'+user);
    * });
    **/
    createUser: (user_name, auth_type, options) => {
      var user = {
        "auth_type": auth_type,
        "user_name": user_name
      };
      if(options && options.role){
        user.role = options.role;
      }
      if(options && options.password){
        user.password = options.password;
      }
      return axios({
        method: 'POST',
        url: `${base}/api/v1/user/`,
        headers: {"Authorization" : `bearer ${token}`},
        data: user
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Delete a user
    * @name deleteUser
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} user_name user name
    * @param {String} auth_type authentication type
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.deleteUser('bob','agile-local').then(function() {
    *   console.log('user removed!');
    * });
    **/
    deleteUser: (user_name, auth_type) => {
      var parsed = parseUrl(`${base}/api/v1/user/`);
      parsed.set("query",{'auth_type': auth_type, 'user_name': user_name});
      var url = parsed.toString();
      return axios({
        method: 'DELETE',
        url: url,
        headers: {"Authorization":`bearer ${token}`}
      })
      .then(res => (res))
      .catch(errorHandler);
    }

  });
};

export default idm;
