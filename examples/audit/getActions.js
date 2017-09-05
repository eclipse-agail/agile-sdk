var config = require('../token_conf');
var agile = require('../../dist')(config);
var username = 'sam';
var authentication = 'agile-local';
agile.idm.user.getCurrentUserInfo()
.then(function (data) {
  return agile.idm.entity.create('1', 'device', {'name': 'my device', 'credentials': {'dropbox': '123'}});
}).then(function (entity) {
  console.log('entity created' + JSON.stringify(entity));
  return agile.idm.user.create(username, authentication, {'role': 'admin', 'password': 'secret'});
}).then(function (user) {
  console.log('user created' + JSON.stringify(user));
  return agile.policies.pdp.evaluate([{
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'actions.self',
    method: 'read'
  }, {
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'actions.policy',
    method: 'read'
  }
  ]);
}).then(function (results) {
  console.log('pdp results' + JSON.stringify(results));
  return Promise.all([
    agile.audit.getUserActions(),
    agile.audit.getActionsOnUsersEntities()
  ]);
}).then(function (results) {
  console.log('actions executed by me in the past: ' + JSON.stringify(results[0]));
  console.log('actions executed on entities I own in the past: ' + JSON.stringify(results[1]));
  return agile.audit.cleanActionsOnUsersEntities();
}).then(function () {
  return agile.audit.getActionsOnUsersEntities();
}).then(function (actions) {
  console.log('Result of finding actions performed on users entities after cleaning the record' + JSON.stringify(actions));

  return Promise.all([
    agile.idm.user.delete('sam', 'agile-local'),
    agile.idm.entity.delete('1', 'device')
  ]);
}).then(function () {
  console.log('entity and user deleted again...');
}).catch(function (err) {
  console.log(err);
});
