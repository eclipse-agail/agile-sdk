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
  return Promise.all([agile.idm.group.delete(owner,"gname"), agile.idm.entity.delete("1","device")]);
}).then(function(deletions){
    return agile.idm.entity.create("1","device",{"name":"my device","credentials":{"dropbox":"123"}});
  },function error(err){
    return agile.idm.entity.create("1","device",{"name":"my device","credentials":{"dropbox":"123"}});
}).then(function(entity){
  console.log('entity created !'+JSON.stringify(entity))
  return agile.idm.entity.getByType("device");
}).then(function(entities){
  console.log('entities found  !'+JSON.stringify(entities))
  return agile.idm.entity.setAttribute({
    entityId: '1',
    entityType: "device",
    attributeType: "name",
    attributeValue: "my device2"
  });
}).then(function(entity){
  console.log('entitys name updated!'+JSON.stringify(entity))
  //setting attribute works with strings...
  return agile.idm.entity.getByAttributeValue([{attributeType:"name",attributeValue:"my device2"}]);
}).then(function(entities){
  console.log('entities found by attribute name and type'+JSON.stringify(entities))
  //it can also be an object...
  return agile.idm.entity.setAttribute({
    entityId: '1',
    entityType: "device",
    attributeType: "credentials",
    attributeValue: {"dropbox":"345", "drive":"drivestuff"}
  });
}).then(function(entity){
  console.log('entitys credentials updated!'+JSON.stringify(entity))
  //it can also be a nested attribute..
  return agile.idm.entity.setAttribute({
    entityId: '1',
    entityType: "device",
    attributeType: "credentials.dropbox",
    attributeValue: "567"
  });
}).then(function(entity){
  console.log('entitys credentials updated!'+JSON.stringify(entity))
  return agile.idm.entity.deleteAttribute("1","device","credentials");
}).then(function(entity){
  console.log('entitys credentials deleted!'+JSON.stringify(entity))
  return agile.idm.group.create("gname");
}).then(function(group){
  console.log("group created!"+JSON.stringify(group));
  return agile.idm.group.get(owner, "gname");
}).then(function(group){
  console.log("group found!"+JSON.stringify(group));
  return agile.idm.group.get();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.group.addEntity({owner: owner, name:"gname", entityId: "1", entityType:"device"});
}).then(function(entity){
  console.log("entity in group"+JSON.stringify(entity));
  return agile.idm.group.get();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.entity.get("1","device");
}).then(function(entity){
  console.log('result of reading entity !'+JSON.stringify(entity))
  return agile.idm.group.removeEntity({owner: owner, name:"gname", entityId: "1", entityType:"device"});
}).then(function(result){
  console.log("entity has been removed from the group");
  return agile.idm.group.get();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.entity.delete("1","device");
}).then(function(result){
  console.log("entity has been removed");
  return agile.idm.group.get();
}).then(function(groups){
  console.log("groups are"+JSON.stringify(groups));
  return agile.idm.group.delete(owner, "gname");
}).then(function(r) {
  console.log("group deleted"+r);
}).catch(function(err) {
  console.log(err)
});
