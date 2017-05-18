import axios from 'axios';
import qs from 'qs';
import { errorHandler } from '../utils';

const entity = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @summary Authenticate a client with client secret and client name. This call only works from server-side JS. See https://github.com/mzabriskie/axios/issues/362
    * @name authenticateClient
    * @public
    * @function
    * @memberof agile.idm.authentication
    * @param {String} client - client name
    * @param {String} secret - client secret
    * @fulfil {Object} Authentication information including token_type and access_token
    * @returns {Promise}
    * @example
    * agile.idm.authentication.authenticateClient("client_name","credentials").then(function(result) {
    *   console.log(credentials.access_token);
    *   console.log(credentials.token_type);
    * });
    **/
    authenticateClient: (client, secret) => {
      let url = `${base}/oauth2/token`;
      return axios({
        method: 'POST',
        url: url,
        auth: {
          username: client,
          password: secret
        },
        headers:{
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        data:qs.stringify({grant_type:'client_credentials'})
      })
      .then(res => (res.data))
      .catch(errorHandler);
    },
  });
};

export default entity;
