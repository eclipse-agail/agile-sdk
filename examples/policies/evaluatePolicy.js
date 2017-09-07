var config = require('../token_conf');
var agile = require('../../dist')(config);
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
  return agile.policies.pdp.evaluate([{
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'password',
    method: 'read'
  }, {
    entityId: 'sam!@!agile-local',
    entityType: 'user',
    field: 'id',
    method: 'read'
  }
  ]);
}).then(function (results) {
  console.log('pdp results' + JSON.stringify(results));
  return agile.idm.user.delete('sam', 'agile-local');
}).then(function () {
  console.log('user deleted again...');
}).catch(function (err) {
  console.log(err);
});
