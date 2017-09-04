import axios from 'axios';
import qs from 'qs';

// axios interceptors don't respect application/x-www-form-urlencoded set headers
// https://github.com/mzabriskie/axios/issues/362
axios.interceptors.request.use((request) => {
  if (request.data && request.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    request.data = qs.stringify(request.data);
  }
  return request;
});

// sets up default axios response
axios.interceptors.response.use((response) => {
  // we're only interested in the res body
  return response.data;
}, (error) => {
  // reject on error
  return Promise.reject(error);
});

export const tokenSet = (token) => {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  return token;
};
