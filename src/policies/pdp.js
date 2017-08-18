import axios from 'axios';
import { errorHandler } from '../utils';

const pdp = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { 'Authorization': `bearer ${token}` }
  });

  return ({
    /**
    * @summary Evaluate policies for a particular entity and action or attribute
    * @name evaluatePolicies
    * @public
    * @function
    * @memberof agile.policies.pdp.evaluatePolicies
    * @param {Array} PDP request - each element in the array includes entityId, entityType, field indicating
    *  the attribute or action to be executed. Finally the method can be read or write depending on the action to be performed.
    *  For instance the example shows the evaluation of a policy showing whether the user logged in can read the attribute password for the user with id sam!@!agile-local
    * @fulfil {Array} boolean - each elemtn in the array is a boolean value mapeed one-to-one to the PDP requests objects. Each boolean shows whether the policy evaluated in the same potition of the array was allowed or not.
    * @returns {Promise}
    * @example
    * agile.policies.pdp.evaluatePolicies([{
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password',
    *      method : 'read'
    *    }]).then(function(results) {
    *  console.log(results);
    * });
    **/
    evaluatePolicies: (array) => instance.request({
      method: 'POST',
      url: `${base}/api/v1//pdp/batch/`,
      data: {
        actions : array
      }
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
        params: {
          auth_type: authType,
          user_name: userName
        }
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
        auth_type: authType,
        user_name: userName
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
        params: {
          auth_type: authType,
          user_name: userName
        }
      })
        .then(res => (res))
        .catch(errorHandler);
    },
    /**
    * @summary Reset password for any user. The user executing this action needs to be allowed to do this, e.g. admin.
    * @name resetPassword
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} userName user name
    * @param {String} authType authentication type
    * @param {String} newPassword new password
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.setPassword('bob','agile-local',"myNewPassword").then(function() {
    *   console.log('password updated!');
    * });
    **/
    resetPassword: (userName, authType, newPassword) => {
      return instance.request({
        method: 'PUT',
        url: `${base}/api/v1/user/${userName}!@!${authType}/password`,
        data: {
          new_password: newPassword
        }
      })
        .then(res => (res.data))
        .catch(errorHandler);
    },
    /**
    * @summary update password for himself
    * @name updatePassword
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} oldPassword old password
    * @param {String} newPassword new password
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.updatePassword("myOldPassword","myNewPassword").then(function() {
    *   console.log('password updated!');
    * });
    **/
    updatePassword: (oldPassword, newPassword) => {
      return instance.request({
        method: 'PUT',
        url: `${base}/api/v1/user/password`,
        data: {
          old_password: oldPassword,
          new_password: newPassword}
      })
        .then(res => (res.data))
        .catch(errorHandler);
    }
  });
};

export default pdp;
