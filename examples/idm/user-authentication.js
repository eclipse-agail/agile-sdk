/*******************************************************************************
 * Copyright (C) 2018 resin.io, and others
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 ******************************************************************************/
var config = require('../token_conf');
var agile = require('../../dist')(config);

agile.idm.user.getCurrentUserInfo()
.then(function (data) {
  return Promise.all([agile.idm.entity.delete('MyAgileClient2', 'client')]);
}).then(function (deletions) {
  return agile.idm.entity.create('MyAgileClient2', 'client', {'name': 'MyAgileClient2', 'clientSecret': 'theclientsecret', 'redirectURI': 'http://localhost:8080/auth/example/callback'});
}, function error (err) {
  console.log('entity was not yet created. This is ok...' + err);
  return agile.idm.entity.create('MyAgileClient2', 'client', {'name': 'MyAgileClient2', 'clientSecret': 'theclientsecret', 'redirectURI': 'http://localhost:8080/auth/example/callback'});
}).then(function (entity) {
  console.log('client created !' + JSON.stringify(entity));
  return agile.idm.authentication.authenticateUser('MyAgileClient2', 'theclientsecret','agile','secret');
}).then(function (auth) {
  console.log(auth)
  console.log('authentication result !' + JSON.stringify(auth));
  return agile.idm.entity.delete('MyAgileClient2', 'client');
}).then(function (result) {
  console.log('client has been removed');
}).catch(function (error) {
  console.log('error: ' + console.log(error));
});
