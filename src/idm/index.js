import axios from 'axios';
import group from './group';
import user from './user';
import entity from './entity';

import { errorHandler } from '../utils';

const idm = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @namespace group
    * @memberof agile.idm
    **/
    group: group(base,token),
    /**
    * @namespace user
    * @memberof agile.idm
    **/
    user: user(base,token),
    /**
    * @namespace entity
    * @memberof agile.idm
    **/
    entity: entity(base,token)

  });
};

export default idm;
