import m from 'mochainon';
import agileSDK from '../src/';
import _ from 'lodash';

const HOST = 'http://agile.local:8080/';
const agile = agileSDK(HOST);
const base = 'api/device/';
const deviceId = 'bleB0B448BE5084';

describe('protocolManager', function() {
  describe('.discovery', function() {
    describe('.status', function() {
      it('respond with an array of users', function() {
        const promise = agile.protocolManager.discovery.status();
        m.chai.expect(promise).to.eventually.equal('NONE');
      });
    });
    describe('.start', function() {
      it('respond with an array of users', function() {
        const promise = agile.protocolManager.discovery.start();
        m.chai.expect(promise).to.eventually.equal('RUNNING');
      });
    });
    describe('.stop', function() {
      it('respond with an array of users', function() {
        const promise = agile.protocolManager.discovery.start();
        m.chai.expect(promise).to.eventually.equal('NONE');
      });
    });
  });
});



// describe('deviceManager', function() {
//   describe('.get', function() {
//     it('respond with an array of users', function() {
//       agile.device.get(deviceId).then(components => {
//         m.chai.expect(_.isArray(components)).to.be.true
//       })
//     });
//   });
//   describe('.status', function() {
//     it('respond with an array of users', function() {
//       const promise = agile.device.status(deviceId);
//       m.chai.expect(promise).to.eventually.equal('AVAILABLE');
//     });
//   });
// });

// describe('device', function() {
//   describe('.get', function() {
//     it('respond with an array of users', function() {
//       agile.device.get(deviceId).then(components => {
//         m.chai.expect(_.isArray(components)).to.be.true
//       })
//     });
//   });
//   describe('.status', function() {
//     it('respond with an array of users', function() {
//       const promise = agile.device.status(deviceId);
//       m.chai.expect(promise).to.eventually.equal('AVAILABLE');
//     });
//   });
// });
