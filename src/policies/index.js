import pdp from './pdp';

const policies = (base, token) => {
  base = `${base}`;
  return ({
    /**
    * @namespace pdp
    * @memberof agile.policies
    **/
    pdp: pdp(base, token)

  });
};

export default policies;
