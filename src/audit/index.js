import axios from 'axios';
import { errorHandler } from '../utils';

const pdp = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { 'Authorization': `bearer ${token}` }
  });

  return ({
    /**
    * @summary Get actions performed by currently logged in user
    * @name getUserActions
    * @public
    * @function
    * @memberof agile.audit
    * @fulfil {Array} Actions actions performed by the user authenticated with the token used by the SDK. Each action has a user, entity and time field to show who executed where action when on which entity.
    * @returns {Promise}
    * @example
    * agile.policies.audit.getUserActions( ).then(function(results) {
    *  console.log(results);
    * });
    **/
    getUserActions: (params) => {
      let url = `${base}/api/v1/audit/actions/byMe`;
      return instance.request({
        method: 'GET',
        url: url
      })
      .then(res => (res.data.result))
      .catch(errorHandler);
    },
    /**
    * @summary Get actions performed on entities owned by the user currently logged in
    * @name getActionsOnUsersEntities
    * @public
    * @function
    * @memberof agile.audit
    * @fulfil {Array} Actions actions performed by the user authenticated with the token used by the SDK. Each action has a user, entity and time field to show who executed where action when on which entity.
    * @returns {Promise}
    * @example
    * agile.policies.audit.getActionsOnUsersEntities( ).then(function(results) {
    *  console.log(results);
    * });
    **/
    getActionsOnUsersEntities: (params) => {
      let url = `${base}/api/v1/audit/actions/myEntities`;
      return instance.request({
        method: 'GET',
        url: url
      })
      .then(res => (res.data.result))
      .catch(errorHandler);
    },
    /**
    * @summary Removes actions performed on entities owned by the user currently logged in
    * @name cleanActionsOnUsersEntities
    * @public
    * @function
    * @memberof agile.audit
    * @returns {Promise}
    * @example
    * agile.policies.audit.cleanActionsOnUsersEntities( ).then(function(results) {
    *  console.log(results);
    * });
    **/
    cleanActionsOnUsersEntities: (params) => {
      let url = `${base}/api/v1/audit/actions/myEntities`;
      return instance.request({
        method: 'DELETE',
        url: url
      })
      .then(res => (res.data.result))
      .catch(errorHandler);
    }
  });
};

export default pdp;
