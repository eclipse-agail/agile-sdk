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
    * @memberof agile.policies.pdp
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
    }
  });
};

export default pdp;
