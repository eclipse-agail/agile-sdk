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

const cloud = (base) => {
  base = `${base}/api`;

  return ({
    getCloudsInfo: () => {
      return axios({
        method: 'GET',
        url: `${base}/cloud`
      })
    },

    getCloudInfo: (cloudName) => {
      return axios({
        method: 'GET',
        url: `${base}/cloud/${cloudName}`
      })
    },

    exportDataToCloud: (cloudName, dataQuery, customArgs) => {
      return axios({
        method: 'POST',
        url: `${base}/cloud/${cloudName}`,
        data: {
          query: dataQuery,
          customArgs
        }
      })
    }
  });
};

export default cloud;
