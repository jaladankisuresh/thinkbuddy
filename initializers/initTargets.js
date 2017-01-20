//var controllers = require('./controllers/controllers');
//var socketApiHelper = require('./utils/socketApiHelper');
var uuid = require('uuid');
var moment = require('moment');
var thinky = require('../configurations/thinky');
var r = thinky.r;
/*
id: type.string(),
type: type.string(),
title: type.string(),
description: type.string()
*/
r.table("Target").insert([
  {
      id: "match1",
      type: "Match",
      title: "Match 1",
      description: "Description Match 1"
  },
  {
      id: "match2",
      type: "Match",
      title: "Match 2",
      description: "Description Match 2"
  } ,
  {
      id: "match3",
      type: "Match",
      title: "Match 3",
      description: "Description Match 3"
  } ,
  {
      id: "sport1",
      type: "Sport",
      title: "Sport 1",
      description: "Description Sport 1"
  } ,
  {
      id: "sport2",
      type: "Sport",
      title: "Sport 2",
      description: "Description Sport 2"
  }]).run()
  .then(function(result) {
    console.log(result);
  })
  .error(function(err) {
    console.log(error.message);
  });
