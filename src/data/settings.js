import axios from 'axios';
import { errorHandler } from '../utils';

const settings = (base) => {
  base = `${base}/settings`;
  return ({
    /**
    * @summary Get settings for agile data
    * @name get
    * @public
    * @function
    * @memberof agile.data.settings
    * @fulfil {Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.settings.get()
    * .then(function(settings) {
    *   console.log(settings);
    * });
    *
    **/
    get: () => {
      return axios({
        method: 'GET',
        url: base
      });
    },
    /**
    * @summary Update settings for agile data
    * @name update
    * @public
    * @function
    * @memberof agile.data.settings
    * @param settings {Object} - Updated settings values
    * @fulfil {Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.settings.update({
    *  retention: '4d'
    * })
    * .then(function(newSettings) {
    *   console.log(newSettings);
    * });
    **/
    update: (settings) => {
      // TODO do some checks once we finalize what retention
      // interval type should be
      return axios({
        method: 'PUT',
        url: base,
        data: settings
      });
    }
  });
};

export default settings;
