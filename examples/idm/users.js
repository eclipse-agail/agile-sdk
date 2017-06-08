var token = require('./token_conf');
var api = 'http://resin.local:8080'
var idmurl = 'http://resin.local:3000';
//var idmurl = 'http://resin.local:8080'
var agile = require('../../dist')({
api: api,
idm: idmurl,
token: token
});
var owner;

agile.idm.user.getCurrentUserInfo()
.then(function(data) {
  owner = data.id;
  return Promise.all([agile.idm.user.delete("sam","agile-local")]);
}).then(function(deletions){
    console.log("user deleted");
    return agile.idm.user.create("sam","agile-local",{"role":"admin", "password":"secret"});
  },function error(err){
    console.log("user not deleted"+JSON.stringify(error));
    return agile.idm.user.create("sam","agile-local","admin");
}).then(function(entity){
  console.log('user  created !'+JSON.stringify(entity))
  return agile.idm.user.get(entity.user_name, entity.auth_type);
}).then(function(entities){
  console.log('user found  !'+JSON.stringify(entities))
}).catch(function(err) {
  console.log(err)
});
