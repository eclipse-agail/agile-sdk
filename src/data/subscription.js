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
  base = `${base}/subscription`;
  return ({
    /**
    * @summary Create subscription for device component
    * @name create
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param deviceID {String} - Agile deviceID
    * @param componentID {String} - Agile componentID
    * @param [interval=3000] {Integer} - Subscription interval
    * @fulfil {Object}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.create('mySensor', 'temperature', 3000)
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    **/
    create: (deviceID, componentID, interval) => {
      interval = interval || 3000;
      return axios({
        method: 'POST',
        url: base,
        data: {
          deviceID,
          componentID,
          interval
        }
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Delete subscription for device component
    * @name delete
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param deviceID {String} - Agile deviceID
    * @param componentID {String} - Agile componentID
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.delete('mySensor', 'temperature')
    * .then(function(subscription) {
    *   console.log('Subscription deleted!');
    * });
    **/
    delete: (deviceID, componentID) => {
      return axios({
        method: 'DELETE',
        url: `${base}/${deviceID}/${componentID}`
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Update subscription for device component
    * @name update
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param deviceID {String} - Agile deviceID
    * @param componentID {String} - Agile componentID
    * @param [interval=3000] {Integer} - Subscription interval
    * @fulfil {Object}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.update('mySensor', 'temperature')
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    **/
    update: (deviceID, componentID, interval) => {
      interval = interval || 3000;

      return axios({
        method: 'PUT',
        url: `${base}/${deviceID}/${componentID}`,
        data: {
          interval
        }
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
    /**
    * @summary Get subscription for device component or get all subscriptions on gateway
    * @name get
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [deviceID] {String} - Agile deviceID
    * @param [componentID] {String} - Agile componentID
    * @fulfil {Object|Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.get('mySensor', 'temperature')
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    * agile.data.subscription.get()
    * .then(function(subscriptions) {
    *   console.log(subscriptions);
    * });
    **/
    get: (deviceID, componentID) => {
      let url;
      if (deviceID && componentID) {
        url = `${base}/${deviceID}/${componentID}`;
      } else if (deviceID) {
        url = `${base}/${deviceID}`;
      } else {
        url = `${base}`;
      }

      return axios({
        method: 'GET',
        url: url
      })
      .then(res => (res.data))
      .catch(errorHandler);
    }
  });
};

export default subscription;
