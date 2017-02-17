import m from 'mochainon';
import agileSDK from '../src/';
import nock from 'nock';
import _ from 'lodash';
import resComponents from './responses/components.json';

const HOST = 'http://agile.local:8080/';
const scope = nock(`${HOST}/`);
const agile = agileSDK(HOST);
const base = 'api/device/'
const deviceId = '123'

describe('device', function() {
  describe('.get', function() {
    beforeEach(() => {
      scope.get(`${base}/${deviceId}`)
      .reply(200, resComponents);
    });
    it('respond with an array of users', function() {
      agile.device.get(deviceId).then(components => {
        m.chai.expect(_.isArray(components)).to.be.true
      })
    });
  });
  describe('.status', function() {
    beforeEach(() => {
      scope.get(`${base}/${deviceId}/status`)
      .reply(200, {
        status: 'AVAILABLE'
      });
    });
    it('respond with an array of users', function() {
      const promise = agile.device.status('123');
      m.chai.expect(promise).to.eventually.equal('AVAILABLE')
    });
  });
});
