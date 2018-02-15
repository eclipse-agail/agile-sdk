/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import pdp from './pdp';
import pap from './pap';

const policies = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @namespace pdp
    * @memberof agile.policies
    **/
    pdp: pdp(base, token),
    /**
    * @namespace pap
    * @memberof agile.policies
    **/
    pap: pap(base, token)

  });
};

export default policies;
