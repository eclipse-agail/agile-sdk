import axios from 'axios';
import { errorHandler } from '../utils';

const group = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @summary List all groups
    * @name getGroups
    * @public
    * @function
    * @memberof agile.idm
    * @fulfil {Array} all groups
    * @returns {Promise}
    * @example
    * agile.idm.getGroups().then(function(groups) {
    *   console.log(groups);
    * });
    **/
    getGroups: () => {
      let url = `${base}/api/v1/group`;
      return axios({
        method: 'GET',
        url: url,
        headers: {"Authorization":`bearer ${token}`}
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Create a group onwned by the authenticated user
    * @name createGroup
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} groupName - Name of the group
    * @fulfil {Object} group created
    * @returns {Promise}
    * @example
    * agile.device.createGroup('ble-devices').then(function(group) {
    *   console.log('group created!'+group);
    * });
    **/
    createGroup: (name) => axios({
      method: 'POST',
      url: `${base}/api/v1/group/`,
      headers: {"Authorization" : `bearer ${token}`},
      data: {"group_name" : name}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete a group
    * @name deleteGroup
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} owner - Owner of the group
    * @param {String} groupName - Name of the group
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.deleteGroup('agile!@!agile-local','my-group').then(function() {
    *   console.log('group removed!');
    * });
    **/
    deleteGroup: (owner, name) => axios({
      method: 'DELETE',
      url: `${base}/api/v1/user/${owner}/group/${name}`,
      headers: {"Authorization" : `bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Add entity to a group
    * @name addEntityToGroup
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} owner - Owner of the group
    * @param {String} groupName - Name of the group
    * @param {String} entityId - id of the entity
    * @param {String} entityType - Type of the entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.addEntityToGroup('agile!@!agile-local','my-group','1','/sensor').then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    addEntityToGroup:(owner, name, entity_id, entity_type) => axios({
      method: 'POST',
      url: `${base}/api/v1/user/${owner}/group/${name}/entities/${entity_type}/${entity_id}`,
      headers: {"Authorization" : `bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Remove entity from a group
    * @name removeEntityFromGroup
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} owner - Owner of the group
    * @param {String} groupName - Name of the group
    * @param {String} entityId - id of the entity
    * @param {String} entityType - Type of the entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.removeEntityFromGroup('agile!@!agile-local','my-group','1','/sensor').then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    removeEntityFromGroup:(owner, name, entity_id, entity_type) => axios({
      method: 'DELETE',
      url: `${base}/api/v1/user/${owner}/group/${name}/entities/${entity_type}/${entity_id}`,
      headers: {"Authorization" : `bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
  });
};

export default group;
