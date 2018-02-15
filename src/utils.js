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
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return token;
};

export const tokenDelete = (token) => {
  delete axios.defaults.headers.common['Authorization'];
  return;
};

export const tokenGet = (token) => {
  if (axios.defaults.headers.common['Authorization']) {
    return axios.defaults.headers.common['Authorization'].split(' ')[1];
  }
};
