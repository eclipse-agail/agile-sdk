var token = require('./token_conf');
var api = 'http://resin.local:8080';
var idmurl = 'http://localhost:3000';
var agile = require('../../dist')({
  api: api,
  idm: idmurl,
  token: token
});
var username = 'sam';
var authentication = 'agile-local';
agile.idm.user.getCurrentUserInfo()
.then(function (data) {
  console.log('you are logged in as: ' + JSON.stringify(data));
  return Promise.all([agile.idm.user.delete('sam', 'agile-local')]);
}).then(function (deletions) {
  console.log('user deleted');
  return agile.idm.user.create(username, authentication, {'role': 'admin', 'password': 'secret'});
}, function error (err) {
  console.log('user not deleted' + JSON.stringify(err.toString()));
  return agile.idm.user.create(username, authentication, {'role': 'admin', 'password': 'secret'});
}).then(function (user) {
  console.log('user created' + JSON.stringify(user));
  return Promise.all([
    agile.policies.pap.get({
      entityId: 'sam!@!agile-local',
      entityType: 'user'

    }),
    agile.policies.pap.get({
      entityId: 'sam!@!agile-local',
      entityType: 'user',
      field: 'password'
    }),
    agile.policies.pdp.evaluate([{
      entityId: 'sam!@!agile-local',
      entityType: 'user',
      field: 'password',
      method: 'read'
    }])
  ]);
}).then(function (results) {
  console.log('pap policy for entity is there... just to big to log it :)' + results[0]);
  console.log('pap policy for attribute' + JSON.stringify(results[1], null, 2));
  console.log('pdp result when attempting to read password from sam is' + JSON.stringify(results[2]));
  return agile.policies.pap.set({
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'password',
    policy: [
      {
        op: 'write'
      },
      {
        op: 'read'
      }
    ]
  });
}).then(function (r) {
  console.log('result after setting policy ' + JSON.stringify(r));
  return agile.policies.pdp.evaluate([{
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'password',
    method: 'read'
  }
  ]);
}).then(function (r) {
  console.log('the pdp result to read password after making the password readable for everyone ' + JSON.stringify(r));
  return agile.policies.pap.delete({
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'password'

  });
}).then(function (r) {
  console.log('result after deleting the policy ' + JSON.stringify(r));
  return agile.policies.pdp.evaluate([{
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'password',
    method: 'read'
  }
  ]);
}).then(function (r) {
  console.log('the pdp result to read password of the user after update to make delete the policy' + JSON.stringify(r));

  return agile.idm.user.delete('sam', 'agile-local');
}).then(function () {
  console.log('user deleted again...');
}).catch(function (err) {
  console.log(err);
});
