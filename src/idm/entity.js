/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import axios from 'axios';

const entity = (base) => {
  base = `${base}`;
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
    * agile.idm.entity.getByType('device').then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getByType: (entityType) => {
      let url = `${base}/api/v1/entity/${entityType}`;
      return axios.request({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary List all entities which have a particular attribute value
    * @name getByAttributeValue
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {Array} constraints - contains objects containing objects with the property  'attributeType' to specify the attribute type and with the property 'attributeValue' to specify the expected attribute value
    * @fulfil {Array} all entities with a given type
    * @returns {Promise}
    * @example
    * agile.idm.entity.getByAttributeValue([{attributeType:'credentials.dropbox','attributeValue':'expected attribute value for dropbox credentials'}]).then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getByAttributeValue: (constraints) => {
      let url = `${base}/api/v1/entity/search`;
      var cons = constraints.map((c) => {
        return {
          attribute_type: c.attributeType,
          attribute_value: c.attributeValue
        };
      });
      return axios.request({
        method: 'POST',
        url: url,
        data: {
          criteria: cons
        }
      });
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
    * agile.idm.entity.get('1','device').then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    get: (entityId, entityType) => axios.request({
      method: 'get',
      url: `${base}/api/v1/entity/${entityType}/${entityId}`
    }),
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
    * agile.idm.entity.create('1','device',{'name':'entity name'}).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    create: (entityId, entityType, entity) => axios.request({
      method: 'POST',
      url: `${base}/api/v1/entity/${entityType}/${entityId}`,
      data: entity
    }),
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
    * agile.idm.entity.delete('1','device').then(function() {
    *   console.log('group removed!');
    * });
    **/
    delete: (entityId, entityType) => axios.request({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entityType}/${entityId}`
    }),
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
          entityId: '1',
          entityType: 'device',
          attributeType: 'credentials',
          attributeValue: {'dropbox':'entity credentials for drop'}
        }).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    setAttribute: (params) => axios.request({
      method: 'PUT',
      url: `${base}/api/v1/entity/${params.entityType}/${params.entityId}/attribute/${params.attributeType}/`,
      data: {
        value: params.attributeValue
      }
    }),
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
    * agile.idm.entity.deleteAttribute('1','device','credentials').then(function(result) {
    *   console.log('entity updated!'+result);
    * });
    **/
    deleteAttribute: (entityId, entityType, attributeType) => axios.request({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entityType}/${entityId}/attribute/${attributeType}/`
    }),
    /**
    * @summary Get Entities schema
    * @name getEntitiesSchema
    * @public
    * @function
    * @memberof agile.idm.entity
    * @fulfil {Object} JSON Schema with the configuration for the entity format
    * @returns {Promise}
    * @example
    * agile.idm.entity.getEntitiesSchema().then(function(jsonschema) {
    *   console.log('schema for the entities'+jsonschema);
    * });
    **/
    getEntitiesSchema: () => axios.request({
      method: 'GET',
      url: `${base}/api/v1/entity_types/`
    })
  });
};

export default entity;
