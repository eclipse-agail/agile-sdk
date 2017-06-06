import axios from 'axios';
import { errorHandler } from '../utils';

const entity = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { 'Authorization' : `bearer ${token}`}
  });

  return ({
    /**
    * @summary List all entities by type
    * @name getByType
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityType - type of entity
    * @fulfil {Array} all entities with a given type
    * @returns {Promise}
    * @example
    * agile.idm.entity.getByType('sensor').then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getByType: (entity_type) => {
      let url = `${base}/api/v1/entity/${entity_type}`;
      return instance.request({
        method: 'GET',
        url: url
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary List all entities which have a particular attribute value
    * @name getByAttributeValue
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {Array} constraints - contains objects containing objects with the property  'attribute_type' to specify the attribute type and with the property 'attribute_value' to specify the expected attribute value
    * @fulfil {Array} all entities with a given type
    * @returns {Promise}
    * @example
    * agile.idm.entity.getByAttributeValue([{attribute_typeattribute_type:'credentials.dropbox','attribute_value':'expected attribute value for dropbox credentials'}]).then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getByAttributeValue: (constraints) => {
      let url = `${base}/api/v1/entity/search`;
      return instance.request({
        method: 'POST',
        url: url,
        data:{ 'criteria':constraints}
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary get Entity by entity id and type
    * @name get
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @fulfil {Object} entity entity
    * @returns {Promise}
    * @example
    * agile.idm.entity.get('1','/sensor').then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    get: (entity_id, entity_type) => instance.request({
      method: 'get',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}`,
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Create a group onwned by the authenticated user
    * @name create
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @param {object} entity - An object containing the entity
    * @fulfil {Object} entity created
    * @returns {Promise}
    * @example
    * agile.idm.entity.create('1','/sensor',{'name':'entity's name'}).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    create: (entity_id, entity_type, entity) => instance.request({
      method: 'POST',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}`,
      data: entity
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete entity
    * @name delete
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.entity.delete('1','/sensor').then(function() {
    *   console.log('group removed!');
    * });
    **/
    delete: (entity_id, entity_type) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}`,
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Set Entity's attribute
    * @name setAttribute
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {Object} with  entityId - id of entity,
      entityType - type of entity,
      attributeName- name of the attribute,
      attribute - An object or a String containing the entity's attribute value
    * @fulfil {Object} entity updated
    * @returns {Promise}
    * @example
    * agile.idm.entity.setAttribute({
          entity_id: '1',,
          entity_type: '/sensor',
          attribute_type: 'credentials',
          attribute_value: {'dropbox':'entity's credentials for drop'}
        }).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    setAttribute: (params) => instance.request({
      method: 'PUT',
      url: `${base}/api/v1/entity/${params.entity_type}/${params.entity_id}/attribute/${params.attribute_type}/`,
      data: { 'value' : params.attribute_value}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete Entity's attribute
    * @name deleteAttribute
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @param {String} attributeName- name of the attribute
    * @fulfil {Object} entity updated entity
    * @returns {Promise}
    * @example
    * agile.idm.entity.deleteAttribute('1','/sensor','credentials').then(function(result) {
    *   console.log('entity updated!'+result);
    * });
    **/
    deleteAttribute: (entity_id, entity_type, attribute_type) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}/attribute/${attribute_type}/`,
    })
    .then(res => (res.data))
    .catch(errorHandler),
  });
};

export default entity;
