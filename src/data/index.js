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
import subscription from './subscription';
import record from './record';
import retention from './retention';

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
    * @namespace retention
    * @memberof agile.data
    **/
    retention: retention(base)
  });
};

export default data;
