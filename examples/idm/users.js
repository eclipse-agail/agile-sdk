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
}).then(function (entity) {
  console.log('user  created !' + JSON.stringify(entity));
  return agile.idm.user.get(entity.user_name, entity.auth_type);
}).then(function (user) {
  console.log('user found  !' + JSON.stringify(user));
  // If the token owner has a password === secret, this would change the password of the token owner
  // return agile.idm.user.updatePassword('secret','myNewPassword');
  // instead this call resets sam's password to myNewPassword
  return agile.idm.user.resetPassword(user.user_name, user.auth_type, 'mySecretPassword');
}).then(function () {
  console.log('password has been updated in IDM...');
  return agile.idm.user.delete('sam', 'agile-local');
}).then(function () {
  console.log('user deleted again...');
}).catch(function (err) {
  console.log(err);
});
