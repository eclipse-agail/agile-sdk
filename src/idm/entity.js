/*******************************************************************************
 *Copyright (C) 2017 Resin.io, UNI Passau.
 *All rights reserved. This program and the accompanying materials
 *are made available under the terms of the Eclipse Public License v1.0
 *which accompanies this distribution, and is available at
 *http://www.eclipse.org/legal/epl-v10.html
 *
 *Contributors:
 *    Resin.io, UNI Passau - initial API and implementation
 ******************************************************************************/
import axios from 'axios';
import { errorHandler } from '../utils';

const entity = (base, token) => {
  base = `${base}`;
  var instance = axios.create({
    headers: { 'Authorization': `bearer ${token}` }
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
    * agile.idm.entity.getByType('device').then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getByType: (entityType) => {
      let url = `${base}/api/v1/entity/${entityType}`;
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
        return {attribute_type: c.attributeType, attribute_value: c.attributeValue};
      });
      return instance.request({
        method: 'POST',
        url: url,
        data: { 'criteria': cons }
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
    * agile.idm.entity.get('1','device').then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    get: (entityId, entityType) => instance.request({
      method: 'get',
      url: `${base}/api/v1/entity/${entityType}/${entityId}`
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
    * agile.idm.entity.create('1','device',{'name':'entity name'}).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    create: (entityId, entityType, entity) => instance.request({
      method: 'POST',
      url: `${base}/api/v1/entity/${entityType}/${entityId}`,
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
    * agile.idm.entity.delete('1','device').then(function() {
    *   console.log('group removed!');
    * });
    **/
    delete: (entityId, entityType) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entityType}/${entityId}`
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
          entityId: '1',,
          entityType: 'device',
          attributeType: 'credentials',
          attributeValue: {'dropbox':'entity credentials for drop'}
        }).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    setAttribute: (params) => instance.request({
      method: 'PUT',
      url: `${base}/api/v1/entity/${params.entityType}/${params.entityId}/attribute/${params.attributeType}/`,
      data: { 'value': params.attributeValue }
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
    * agile.idm.entity.deleteAttribute('1','device','credentials').then(function(result) {
    *   console.log('entity updated!'+result);
    * });
    **/
    deleteAttribute: (entityId, entityType, attributeType) => instance.request({
      method: 'DELETE',
      url: `${base}/api/v1/entity/${entityType}/${entityId}/attribute/${attributeType}/`
    })
    .then(res => (res.data))
    .catch(errorHandler)
  });
};

export default entity;
