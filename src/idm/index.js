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
import group from './group';
import user from './user';
import entity from './entity';
import authentication from './authentication';

const idm = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @namespace group
    * @memberof agile.idm
    **/
    group: group(base, token),
    /**
    * @namespace user
    * @memberof agile.idm
    **/
    user: user(base, token),
    /**
    * @namespace entity
    * @memberof agile.idm
    **/
    entity: entity(base, token),
    /**
    * @namespace authentication
    * @memberof agile.idm
    **/
    authentication: authentication(base, token)

  });
};

export default idm;
