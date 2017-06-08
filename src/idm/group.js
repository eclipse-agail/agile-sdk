import axios from 'axios';
import { errorHandler } from '../utils';

const group = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { 'Authorization': `bearer ${token}` }
  });
  return ({
    /**
    * @summary Get a particular group by name and owner
    * @name get
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} [owner] - Owner of the group
    * @param {String} [groupName] - Name of the group
    * @fulfil {Array} all groups if no arguments are provided, otherwise the group with given name and owner.
    * @returns {Promise}
    * @example
    * agile.idm.group.get('agile!@!agile-local','my-group').then(function(group) {
    *   console.log('this is my group '+JSON.stringify(group));
    * });
    * agile.idm.group.get().then(function(groups) {
    *   console.log('these are all groups '+JSON.stringify(groups));
    * });
    **/
    get: (owner, name) => {
      var url = owner && name ? `${base}/api/v1/user/${owner}/group/${name}` : `${base}/api/v1/group`;
      return instance.request({
        method: 'GET',
        url: url
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Create a group onwned by the authenticated user
    * @name create
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} groupName - Name of the group
    * @fulfil {Object} group created
    * @returns {Promise}
    * @example
    * agile.idm.group.create('ble-devices').then(function(group) {
    *   console.log('group created!'+group);
    * });
    **/
    create: (name) => instance.request({
      method: 'POST',
      url: `${base}/api/v1/group/`,
      data: {'group_name': name}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete a group
    * @name delete
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} owner - Owner of the group
    * @param {String} groupName - Name of the group
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.group.delete('agile!@!agile-local','my-group').then(function() {
    *   console.log('group removed!');
    * });
    **/
    delete: (owner, name) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/user/${owner}/group/${name}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Add entity to a group
    * @name addEntity
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
          entityId: '1',
          entityType: 'device'
        }).then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    addEntity: (params) => instance.request({
      method: 'POST',
      url: `${base}/api/v1/user/${params.owner}/group/${params.name}/entities/${params.entityType}/${params.entityId}`
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Remove entity from a group
    * @name removeEntity
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
    * agile.idm.group.removeEntity({
          owner: 'agile!@!agile-local',
          name: 'my-group',
        entityId: '1',
          entityType: 'device'
        }).then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    removeEntity: (params) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/user/${params.owner}/group/${params.name}/entities/${params.entityType}/${params.entityId}`
    })
    .then(res => (res.data))
    .catch(errorHandler)
  });
};

export default group;
