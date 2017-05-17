import axios from 'axios';
import { errorHandler } from '../utils';

const entity = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @summary List all entities by type
    * @name getEntitiesByType
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} entityType - type of entity
    * @fulfil {Array} all entities with a given type
    * @returns {Promise}
    * @example
    * agile.idm.entity.getEntitiesByType("sensor").then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getEntitiesByType: (entity_type) => {
      let url = `${base}/api/v1/entity/${entity_type}`;
      return axios({
        method: 'GET',
        url: url,
        headers: {"Authorization":`bearer ${token}`}
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary List all entities which have a particular attribute value
    * @name getEntitiesByAttributeValue
    * @public
    * @function
    * @memberof agile.idm
    * @param {Array} constraints- contains objects containing objects with the property  "attribute_type" to specify the attribute type and with the property "attribute_value" to sepcify the expected attribute value
    * @fulfil {Array} all entities with a given type
    * @returns {Promise}
    * @example
    * agile.idm.entity.getEntitiesByAttributeValue([{attribute_typeattribute_type:"credentials.dropbox","attribute_value":"expected attribute value for dropbox credentials"}]).then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getEntitiesByAttributeValue: (constraints) => {
      let url = `${base}/api/v1/entity/search`;
      return axios({
        method: 'POST',
        url: url,
        headers: {"Authorization":`bearer ${token}`},
        data:{ "criteria":constraints}
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary get Entity by entity id and type
    * @name getEntity
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @fulfil {Object} entity entity
    * @returns {Promise}
    * @example
    * agile.idm.entity.getEntity('1','/sensor').then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    getEntity: (entity_id, entity_type) => axios({
      method: 'get',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}`,
      headers: {"Authorization" : `bearer ${token}`},

    })
    .then(res => (res.data))
    .catch(errorHandler),    /**
        * @summary Create a group onwned by the authenticated user
        * @name createEntity
        * @public
        * @function
        * @memberof agile.idm
        * @param {String} entityId - id of entity
        * @param {String} entityType - type of entity
        * @param {object} entity - An object containing the entity
        * @fulfil {Object} entity created
        * @returns {Promise}
        * @example
        * agile.idm.entity.createEntity('1','/sensor',{"name":"entity's name"}).then(function(result) {
        *   console.log('entity created!'+result);
        * });
        **/
        createEntity: (entity_id, entity_type, entity) => axios({
          method: 'POST',
          url: `${base}/api/v1/entity/${entity_type}/${entity_id}`,
          headers: {"Authorization" : `bearer ${token}`},
          data: entity
        })
        .then(res => (res.data))
        .catch(errorHandler),
    /**
    * @summary Delete entity
    * @name deleteEntity
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.entity.deleteEntity('1','/sensor').then(function() {
    *   console.log('group removed!');
    * });
    **/
    deleteEntity: (entity_id, entity_type) => axios({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}`,
      headers: {"Authorization" : `bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Set Entity's attribute
    * @name setEntityAttribute
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @param {String} attributeName- name of the attribute
    * @param {Object|String} attribute - An object or a String containing the entity's attribute value
    * @fulfil {Object} entity created
    * @returns {Promise}
    * @example
    * agile.idm.entity.setEntityAttribute('1','/sensor',"credentials",{"dropbox":"entity's credentials for drop"}).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    setEntityAttribute: (entity_id, entity_type, attribute_type, attribute_value) => axios({
      method: 'PUT',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}/attribute/${attribute_type}/`,
      headers: {"Authorization" : `bearer ${token}`},
      data: { "value" : attribute_value}
    })
    .then(res => (res.data))
    .catch(errorHandler),
    /**
    * @summary Delete Entity's attribute
    * @name deleteEntityAttribute
    * @public
    * @function
    * @memberof agile.idm
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @param {String} attributeName- name of the attribute
    * @fulfil {Object} entity updated entity
    * @returns {Promise}
    * @example
    * agile.idm.entity.deleteEntityAttribute('1','/sensor',"credentials").then(function(result) {
    *   console.log('entity updated!'+result);
    * });
    **/
    deleteEntityAttribute: (entity_id, entity_type, attribute_type) => axios({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entity_type}/${entity_id}/attribute/${attribute_type}/`,
      headers: {"Authorization" : `bearer ${token}`}
    })
    .then(res => (res.data))
    .catch(errorHandler),
  });
};

export default entity;
