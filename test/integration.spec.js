import m from 'mochainon';
import agileSDK from '../src/';
import _ from 'lodash';

const HOST = 'http://localhost:8080/';
const agile = agileSDK({
  api: HOST
});
const base = 'api/device/';
const deviceId = 'bleB0B448BE5084';
const expect = m.chai.expect;

describe('protocolManager', function() {
  describe('.discovery', function() {
    describe('.status', function() {
      it('should return Array of protocol + statuses', function(done) {
        agile.protocolManager.discovery.status().then((data) => {
           expect(data).to.be.an('Array');
          done()
        })
      });
    });

    describe('.stop', function() {
      it('should stop without error', function() {
        const promise = agile.protocolManager.discovery.stop()
        return expect(promise).to.be.fulfilled;
      });
    });

    describe('.start', function() {
      it('should start without error', function() {
        const promise = agile.protocolManager.discovery.start()
        return expect(promise).to.be.fulfilled;
      });
    });
  });

  describe('.get', function() {
    it('expect to return array of protocols', function() {
      const promise = agile.protocolManager.get()
      return expect(promise).to.eventually.be.an('Array');
    });
  });

});
