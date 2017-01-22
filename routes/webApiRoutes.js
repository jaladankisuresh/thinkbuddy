var path = require('path');
var express = require('express');
var moment = require('moment');
var router = express.Router();
var controllers = require('../controllers/controllers');
var webApi = require('../utils/webApiHelper');

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.route('/notification')
  .get(function(req, res) {
    webApi.onResponse(controllers.notificationCtrl.getCollection(), res);
  })
  .post(function(req, res) {
    webApi.onResponse(returncontrollers.notificationCtrl.get(req.params.id) , res);
    webApi.onResponse(controllers.notificationCtrl.add(req.body) , res);
  });

router.route('/notification/:id')
    .get(function(req, res) {
      webApi.onResponse(controllers.notificationCtrl.get(req.params.id) , res);
    })
    .put(function(req, res) {
      webApi.onResponse(controllers.notificationCtrl.update(req.params.id, req.body), res);
    });

router.route(['/usernotification/:userId', '/usernotification/:userId/:startDateOffset'])
    .get(function(req, res) {
      let paramsObj = {
        userId : req.params.userId,
        offset : req.params.startDateOffset || moment().toISOString(),
        count : 10,
        notificationsCount : 30
      };
      webApi.onResponse(controllers.userNotificationCtrl.getStories(paramsObj), res);
    });

module.exports = router;
