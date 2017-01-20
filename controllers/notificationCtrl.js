var path = require('path');
var nosqlModels = require('../models/models');
var thinky = require('../configurations/thinky');
var r = thinky.r;

var notificationCtrl = {
  get: function(id) {
    return nosqlModels.notificationFeed.get(id).run();
  },
  getCollection: function() {
    return nosqlModels.notificationFeed.orderBy({index: r.desc('date')}).limit(5).run();
  },
  add: function(obj) {
    var notification = new nosqlModels.notificationFeed(obj);
    return notification.save();
  },
  update: function(id, obj) {
    nosqlModels.notificationFeed.get(id).run()
    .then(function(notification){
      return notification.merge(obj).save();
    })
    .error(function(err){
      return Promise.reject(err);
    });
  }
}

module.exports = notificationCtrl;
