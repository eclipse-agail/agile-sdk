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
