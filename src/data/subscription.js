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
  base = `${base}/subscription`;
  return ({
    /**
    * @summary Create subscription for device component
    * @name create
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscription] {Object} - New Subscription configuration
    * @fulfil {Object}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.create({
    *  deviceID: 'myDevice',
    *  componentID: 'temperature',
    *  interval: 3000,
    *  retention: '7d'
    * })
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    **/
    create: (newSubscription) => {
      return axios({
        method: 'POST',
        url: base,
        data: newSubscription
      });
    },
    /**
    * @summary Delete subscription for device component
    * @name delete
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscriptionID] {String} - Agile data subscriptionID
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.delete('128484893938')
    * .then(function(subscription) {
    *   console.log('Subscription deleted!');
    * });
    **/
    delete: (id) => {
      return axios({
        method: 'DELETE',
        url: `${base}/${id}`
      });
    },
    /**
    * @summary Update subscription
    * @name update
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscriptionID] {String} - Agile data subscriptionID
    * @param [subscription] {Object} - Updated Subscription configuration
    * @fulfil {Object}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.update('5991b583553d6897bd14f87d', {
    *    interval : 25000
    *  })
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    **/
    update: (id, subscription) => {
      return axios({
        method: 'PUT',
        url: `${base}/${id}`,
        data: subscription
      });
    },
    /**
    * @summary Get single or all subscriptions on gateway
    * @name get
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscriptionID] {String} - Agile data subscriptionID
    * @fulfil {Object|Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.get('5991b583553d6897bd14f87d')
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    * agile.data.subscription.get()
    * .then(function(subscriptions) {
    *   console.log(subscriptions);
    * });
    **/
    get: (id) => {
      let url = `${base}`;

      if (id) {
        url = `${base}/${id}`;
      }

      return axios({
        method: 'GET',
        url: url
      });
    }
  });
};

export default subscription;
