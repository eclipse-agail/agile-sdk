/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import group from './group';
import user from './user';
import entity from './entity';
import authentication from './authentication';

const idm = (base) => {
  base = `${base}`;
  return ({
    /**
    * @namespace group
    * @memberof agile.idm
    **/
    group: group(base),
    /**
    * @namespace user
    * @memberof agile.idm
    **/
    user: user(base),
    /**
    * @namespace entity
    * @memberof agile.idm
    **/
    entity: entity(base),
    /**
    * @namespace authentication
    * @memberof agile.idm
    **/
    authentication: authentication(base)

  });
};

export default idm;
