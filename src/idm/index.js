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
