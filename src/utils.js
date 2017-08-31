import axios from 'axios';

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
