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
    * const query = 'where={"deviceID":"mySensor"}&order={"by":"time","direction":"ASC"}'
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
      })
      .then(res => (res.data))
      .catch(errorHandler);
    }
  });
};

export default subscription;
