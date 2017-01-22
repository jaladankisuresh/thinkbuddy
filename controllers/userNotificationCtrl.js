var path = require('path');
var async = require('async');
var models = require('../models/models');
var thinky = require('../configurations/thinky');
var r = thinky.r;

var userNotificationCtrl = {
  getCollection: function(paramsObj) {
    let userId = paramsObj.userId, offset = paramsObj.offset, count = paramsObj.notificationStepCount || paramsObj.notificationsCount;

    return r.do(
      r.do(
        r.table('ProfileNetwork').getAll(userId, {index: "profileId"})('referencesProfileId').coerceTo('array'),
        function(referenceProfileIds) {
            return r.table('Profile').getAll(r.args(referenceProfileIds)).filter({type: 'Group'})('id').coerceTo('array');
        }
      ),
      function(referenceGroupIds) {
          return r.table('ProfileNetwork').getAll(r.args(referenceGroupIds), {index: "profileId"})('referencesProfileId');
      }
    ).run()
    .then(function(groupMemberIds){
      if(groupMemberIds.indexOf(userId) > -1) {
        groupMemberIds.splice(groupMemberIds.indexOf(userId), 1);
      }
              
      return models.notificationFeed.orderBy({index: r.desc('date')})
        .filter(function(notification) {
          return r.table('ProfileNetwork').getAll(userId, {index: "profileId"})('referencesProfileId')
            .union(groupMemberIds)
            .contains(notification('actor'))
            .and(notification('date').lt(offset));
        }).limit(count).run();
    });
  },
  getStories: function(paramsObj) {
    var controllers = require('./controllers');
    return controllers.embeddedNotificationCtrl.getStories(paramsObj);
  }
};

module.exports = userNotificationCtrl;
