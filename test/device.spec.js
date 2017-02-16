import m from 'mochainon';
import agileSDK from '../src/';
import nock from 'nock';
import _ from 'lodash';
import resComponents from './response/components.json';

const HOST = 'http://agile.local:8080/';
const scope = nock(`${HOST}/api`);
const agile = agileSDK(HOST);

describe('device', function() {
  describe('.get', function() {
    beforeEach(() => {
      nock.get('/device/123')
      .reply(200, resComponents);
    }
    it('respond with an array of users', function() {
      promise = agile.device.get('123').then(components => {
        m.chai.expect(_.isArray(components)).to.be.true
      })
			m.chai.expect(components).to.eventually.be
    });
  });
});
