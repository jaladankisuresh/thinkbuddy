//var controllers = require('./controllers/controllers');
//var socketApiHelper = require('./utils/socketApiHelper');
var uuid = require('uuid');
var moment = require('moment');
var thinky = require('../configurations/thinky');
var r = thinky.r;
/*
id: type.string(),
type: type.string(),
firstName: type.string(),
lastName: type.string()
*/
r.table("Profile").insert([
  {
      id: "user1",
      type: "User",
      firstName: "firstName 1",
      lastName: "lastName 1"
  },
  {
    id: "user2",
    type: "User",
    firstName: "firstName 2",
    lastName: "lastName 2"
  } ,
  {
    id: "user3",
    type: "User",
    firstName: "firstName 3",
    lastName: "lastName 3"
  } ,
  {
    id: "user4",
    type: "User",
    firstName: "firstName 4",
    lastName: "lastName 4"
  } ,
  {
    id: "user5",
    type: "User",
    firstName: "firstName 5",
    lastName: "lastName 5"
  },
  {
    id: "group1",
    type: "Group",
    firstName: "Group 1",
    lastName: ""
  } ,
  {
    id: "group2",
    type: "Group",
    firstName: "Group 2",
    lastName: ""
  }]).run()
  .then(function(result) {
    console.log(result);
  })
  .error(function(err) {
    console.log(error.message);
  });
