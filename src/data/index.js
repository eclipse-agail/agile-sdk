/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import subscription from './subscription';
import record from './record';
import settings from './settings';

const data = (base) => {
  base = `${base}/api`;
  return ({
    /**
    * @namespace subscription
    * @memberof agile.data
    **/
    subscription: subscription(base),
    /**
    * @namespace record
    * @memberof agile.data
    **/
    record: record(base),
    /**
    * @namespace settings
    * @memberof agile.data
    **/
    settings: settings(base)
  });
};

export default data;
