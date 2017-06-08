import subscription from './subscription';
import record from './record';
import retention from './retention';

const data = (base) => {
  base = `${base}/api`
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
