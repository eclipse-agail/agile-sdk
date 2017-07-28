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
  base = `${base}/record/retention`;
  return ({
    /**
    * @summary Get retention policy from gateway
    * @name get
    * @public
    * @function
    * @memberof agile.data.retention
    * @fulfil {Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.retention.get()
    * .then(function(retentionPolicy) {
    *   console.log(retentionPolicy);
    * });
    *
    **/
    get: () => {
      return axios({
        method: 'GET',
        url: base
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Update retention policy from gateway
    * @name update
    * @public
    * @function
    * @memberof agile.data.retention
    * @param retentionInterval {Integer} - retentionInterval
    * @fulfil {Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.retention.update(9000)
    * .then(function(retentionPolicy) {
    *   console.log(retentionPolicy);
    * });
    **/
    update: (retentionInterval) => {
      // TODO do some checks once we finalize what retention
      // interval type should be
      return axios({
        method: 'PUT',
        url: base,
        data: {
          duration: retentionInterval
        }
      })
      .then(res => (res.data))
      .catch(errorHandler);
    }
  });
};

export default subscription;
