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

const subscription = (base) => {
  base = `${base}/record`;
  return ({
    /**
    * @summary Get records from gateway
    * @name get
    * @public
    * @function
    * @memberof agile.data.record
    * @param [query] {String} - Basic query that is transformed to influx sql
    * @fulfil {Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.record.get()
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    *
    * // you can use any valid mongo-querystring
    * // https://www.npmjs.com/package/mongo-querystring
    * const query = 'deviceID=mySensor'
    * agile.data.record.get(query)
    * .then(function(records) {
    *   console.log(records);
    * });
    **/
    get: (query) => {
      // TODO make this smarter and pass and object instead

      return axios({
        method: 'GET',
        url: query ? `${base}?${query}` : base
      });
    }
  });
};

export default subscription;
