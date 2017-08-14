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
