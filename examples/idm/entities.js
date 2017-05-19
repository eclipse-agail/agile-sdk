var token = require('./token_conf');
var api = 'http://resin.local:8080'
var idmurl = 'http://resin.local:3000';
//var idmurl ='http://localhost:3000'


var agile = require('../../dist')(api,idmurl,token)
var owner;

agile.idm.user.getUserInfo()
.then(function(data) {
  owner = data.id;
  return Promise.all([agile.idm.group.deleteGroup(owner,"gname"), agile.idm.entity.deleteEntity("1","sensor")]);
}).then(function(deletions){
    return agile.idm.entity.createEntity("1","sensor",{"name":"my sensor","credentials":{"dropbox":"123"}});
  },function error(err){
    return agile.idm.entity.createEntity("1","sensor",{"name":"my sensor","credentials":{"dropbox":"123"}});
}).then(function(entity){
  console.log('entity created !'+JSON.stringify(entity))
  return agile.idm.entity.getEntitiesByType("sensor");
}).then(function(entities){
  console.log('entities found  !'+JSON.stringify(entities))
  return agile.idm.entity.setEntityAttribute("1","sensor","name","my sensor2");
}).then(function(entity){
  console.log('entitys name updated!'+JSON.stringify(entity))
  //setting attribute works with strings...
  return agile.idm.entity.getEntitiesByAttributeValue([{attribute_type:"name",attribute_value:"my sensor2"}]);
}).then(function(entities){
  console.log('entities found by attribute name and type'+JSON.stringify(entities))
  //it can also be an object...
  return agile.idm.entity.setEntityAttribute("1","sensor","credentials",{"dropbox":"345", "drive":"drivestuff"});
}).then(function(entity){
  console.log('entitys credentials updated!'+JSON.stringify(entity))
  //it can also be a nested attribute..
  return agile.idm.entity.setEntityAttribute("1","sensor","credentials.dropbox","567");
}).then(function(entity){
  console.log('entitys credentials updated!'+JSON.stringify(entity))
  return agile.idm.entity.deleteEntityAttribute("1","sensor","credentials");
}).then(function(entity){
  console.log('entitys credentials deleted!'+JSON.stringify(entity))
  return agile.idm.group.createGroup("gname");
}).then(function(group){
  console.log("group created!"+JSON.stringify(group));
  return agile.idm.group.getGroups();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.group.addEntityToGroup(owner,"gname","1","sensor");
}).then(function(entity){
  console.log("entity in group"+JSON.stringify(entity));
  return agile.idm.group.getGroups();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.entity.getEntity("1","sensor");
}).then(function(entity){
  console.log('result of reading entity !'+JSON.stringify(entity))
  return agile.idm.group.removeEntityFromGroup(owner,"gname","1","sensor");
}).then(function(result){
  console.log("entity has been removed from the group");
  return agile.idm.group.getGroups();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.entity.deleteEntity("1","sensor");
}).then(function(result){
  console.log("entity has been removed");
  return agile.idm.group.getGroups();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.group.deleteGroup(owner, "gname");
}).then(function(r) {
  console.log("group deleted"+r);
}).catch(function(err) {
  console.log(err)
});
