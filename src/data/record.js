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
      });
    }
  });
};

export default subscription;
