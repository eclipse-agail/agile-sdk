/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 * 
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * 
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
import m from 'mochainon';
import agileSDK from '../src/';
import _ from 'lodash';

const HOST = 'http://localhost:8080/';
const agile = agileSDK(HOST);
const base = 'api/device/';
const deviceId = 'bleB0B448BE5084';
const expect = m.chai.expect;

describe('protocolManager', function() {
  describe('.discovery', function() {
    this.timeout(5000)

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

  describe('.devices', function() {
    it('expect to return array of discovered devices', function() {
      const promise = agile.protocolManager.devices()
      return expect(promise).to.eventually.be.an('Array');
    });
  });
});

describe('token utils', function () {
  describe('.tokenSet', function () {
    it('expect to return token', function() {
      expect(agile.tokenSet('1234')).to.equal('1234');
    });
  });

  describe('.tokenGet', function () {
    it('expect to return token', function() {
      agile.tokenSet('4567');
      expect(agile.tokenGet()).to.equal('4567');
    });
  });

  describe('.tokenDelete', function () {
    it('expect to return token', function() {
      agile.tokenDelete();
      expect(agile.tokenGet()).to.equal(undefined);
    });
  });
});
