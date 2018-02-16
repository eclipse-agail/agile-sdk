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

const pdp = (base, token) => {
  base = `${base}`;

  return ({
    /**
    * @summary Get policies for a particular entity and action or attribute
    * @name get
    * @public
    * @function
    * @memberof agile.policies.pap
    * @param {Object} including entityType, entityId, and field optionally. If provided, field represents the attribute or action for which the policy is being queried.
    * The example shows how to obtain the (read and write) policy for the user with id sam!@!agile-local.
    * @fulfil {Object} Policy for the query, in case it is there
    * @returns {Promise}
    * @example
    * agile.policies.pap.get({
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password'
    *    }).then(function(results) {
    *  console.log(results);
    * });
    **/
    get: (params) => {
      params.field = params.field || '';
      let url = `${base}/api/v1/pap/${params.entityType}/${params.entityId}/${params.field}`;
      return axios.request({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary Set policies for a particular entity and action or attribute
    * @name set
    * @public
    * @function
    * @memberof agile.policies.pap
    * @param {Object} including entityType, entityId, policy, and field optionally. If provided, field represents the attribute or action for which the policy is being queried.
    * The example shows how to make the password of sam!@!agile-local readable and writable to anyone (do not do this in production!).
    * @fulfil {Object} Policy for the entity resulting after the update
    * @returns {Promise}
    * @example
    * agile.policies.pap.set({
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password',
    *      policy :  [
    *       {
    *          op: "write"
    *        },
    *        {
    *          op: "read"
    *        }
    *      ]
    *    }).then(function(results) {
    *  console.log(results);
    * });
    **/
    set: (params) => {
      params.field = params.field || '';
      let url = `${base}/api/v1/pap/${params.entityType}/${params.entityId}/${params.field}`;
      return axios.request({
        method: 'PUT',
        url: url,
        data: {
          policy: params.policy
        }
      });
    },
    /**
    * @summary Delete policies for a particular entity and action or attribute
    * @name delete
    * @public
    * @function
    * @memberof agile.policies.pap
    * @param {Object} including entityType, entityId, and field optionally. If provided, field represents the attribute or action for which the policy is to be deleted.
    * The example shows how to delete the (read and write) policy for the user with id sam!@!agile-local.
    * @fulfil {Object} Policy for the entity resulting after the update
    * @returns {Promise}
    * @example
    * agile.policies.pap.delete({
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password'
    *    }).then(function(results) {
    *  console.log(results);
    * });
    **/
    delete: (params) => {
      params.field = params.field || '';
      let url = `${base}/api/v1/pap/${params.entityType}/${params.entityId}/${params.field}`;
      return axios.request({
        method: 'DELETE',
        url: url
      });
    }

  });
};

export default pdp;
