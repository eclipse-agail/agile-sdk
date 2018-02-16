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
  var instance = axios.create();
  instance.interceptors.response.use((res) => {
    return res.data.result;
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
      });
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
      });
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
      });
    }
  });
};

export default pdp;
