import axios from 'axios';
import { errorHandler } from '../utils';

const group = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { "Authorization" : `bearer ${token}`}
  });
  return ({
    /**
    * @summary List all groups
    * @name getGroups
    * @public
    * @function
    * @memberof agile.idm.group
    * @fulfil {Array} all groups
    * @returns {Promise}
    * @example
    * agile.idm.group.getGroups().then(function(groups) {
    *   console.log(groups);
    * });
    **/
    get: () => {
      let url = `${base}/api/v1/group`;
      return instance.request({
        method: 'GET',
        url: url,
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Create a group onwned by the authenticated user
    * @name createGroup
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} groupName - Name of the group
    * @fulfil {Object} group created
    * @returns {Promise}
    * @example
    * agile.idm.group.createGroup('ble-devices').then(function(group) {
    *   console.log('group created!'+group);
    * });
    **/
    create: (name) => instance.request({
      method: 'POST',
      url: `${base}/api/v1/group/`,
      data: {"group_name" : name}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete a group
    * @name deleteGroup
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} owner - Owner of the group
    * @param {String} groupName - Name of the group
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.group.deleteGroup('agile!@!agile-local','my-group').then(function() {
    *   console.log('group removed!');
    * });
    **/
    delete: (owner, name) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/user/${owner}/group/${name}`,
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Add entity to a group
    * @name addEntityToGroup
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {Object} containing the owner of the group,
      the name of the group,
      the id of the entity to be added to the group,
      and the Type of the entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.group.addEntity({
          owner: 'agile!@!agile-local',
          name: 'my-group',
          entity_id: '1',
          entity_type: '/device'
        }).then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    addEntity:(params) => instance.request({
      method: 'POST',
      url: `${base}/api/v1/user/${params.owner}/group/${params.name}/entities/${params.entity_type}/${params.entity_id}`,
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Remove entity from a group
    * @name removeEntityFromGroup
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {Object} containing the owner of the group,
      the name of the group,
      the id of the entity to be removed to the group,
      and the Type of the entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.group.removeEntity('{
          owner: 'agile!@!agile-local',
          name: 'my-group',
          entity_id: '1',
          entity_type: '/device'
        }).then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    removeEntity:(params) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/user/${params.owner}/group/${params.name}/entities/${params.entity_type}/${params.entity_id}`,
    })
    .then(res => (res.data))
    .catch(errorHandler),
  });
};

export default group;
