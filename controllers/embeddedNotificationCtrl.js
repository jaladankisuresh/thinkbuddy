var Promise = require('bluebird');
var async = require('async');
var data = require('../initializers/initData');
var models = require('../models/models');
var nedbDatastore = require('../configurations/nedb');

var notificationsStore = new nedbDatastore();
const Cursor = notificationsStore.find().constructor;
Promise.promisifyAll(Cursor.prototype);

var embeddedNotificationCtrl = {
  insert: function(data) {
    return notificationsStore.insertAsync(data);
  },
  popStory: function(paramsObj) {
    return notificationsStore.countAsync({})
    .then(function(storeCount) {
      console.log(storeCount);
      console.log(Math.floor(paramsObj.notificationsCount * 0.666));
      if(storeCount == 0) return false;
      if(storeCount > Math.floor(paramsObj.notificationsCount * 0.666)) return true;

      if(storeCount <= Math.floor(paramsObj.notificationsCount * 0.666)) {
        paramsObj.notificationStepCount = Math.floor(paramsObj.notificationsCount * 0.333);
        return notificationsStore.findOne({}).sort({ date : 1 }).execAsync()
        .then(function(doc){
          console.log('find last item in the list');
          console.log(doc);
          paramsObj.offset = doc.date;
          return false;
        });
      }
    })
    .then(function(isSkipLoad){
      if(isSkipLoad) return isSkipLoad;

      var controllers = require('./controllers');
      return controllers.userNotificationCtrl.getCollection(paramsObj)
      .then(function(notifications){
        console.log('new set of notifications');
        if(!notifications || notifications.length == 0) {
          console.log('stop building stories');
          let error = {
            status : 'EndOfFeed',
            message : 'End of notifications feed'
          };
          return Promise.reject(error);
        }
        return notifications;
      })
      .then(function(notifications){
        return controllers.embeddedNotificationCtrl.insert(notifications);
      })
    })
    .then(function(){
      return notificationsStore.findOne({}).sort({ date : -1 }).execAsync()
      .then(function(doc) {
        let obj = {
          item : '',
          itemArr : []
        };
        for(index = 0; index < data.notificationType.length; index++) {
          if(data.notificationType[index].includes(doc.type))
            break;
        }
        if(index < data.notificationType.length) {
          return new Promise(function(resolve, reject) {
            switch(index) {
              case 0:
                //target grouping
                //console.log('actor grouping');
                //obj.itemArr.push(doc.actor);
                obj.item = doc.target;
                notificationsStore.find({ 'type': doc.type, 'target': doc.target }).sort({ date : -1 }).execAsync()
                .then(function(docs) {
                  console.log('target similar docs :' + docs.length);
                  //console.log(docs);
                  docs.forEach(function(item){
                    obj.itemArr.push(item.actor);
                  });
                })
                .then(function() {
                  // Remove multiple documents
                  notificationsStore.removeAsync({ 'type': doc.type, 'target': doc.target }, { multi: true })
                  .then(function(numRemoved) {
                    console.log('target grouping removed :' + numRemoved);
                    console.log(obj);
                    resolve(obj);
                  });
                });
                break;
              case 1:
                //target grouping
                //console.log('target grouping');
                //obj.itemArr.push(doc.target);
                obj.item = doc.actor;
                notificationsStore.find({ 'type': doc.type, 'actor': doc.actor }).sort({ date : -1 }).execAsync()
                .then(function(docs) {
                  console.log('actor similar docs :' + docs.length);
                  //console.log(docs);
                  docs.forEach(function(item){
                    obj.itemArr.push(item.target);
                  });
                })
                .then(function() {
                  // Remove multiple documents
                  notificationsStore.removeAsync({ 'type': doc.type, 'actor': doc.actor }, { multi: true })
                  .then(function(numRemoved) {
                    console.log('actor grouping removed :' + numRemoved);
                    console.log(obj);
                    resolve(obj);
                  });
                });
                break;
              default:
                //no grouping
                obj.itemArr.push(doc.target);
                obj.item = doc.actor;
                // Remove multiple documents
                notificationsStore.removeAsync({ 'id': doc.id }, {})
                .then(function(numRemoved) {
                  console.log('None grouping removed :' + numRemoved);
                  resolve(obj);
                });
                break;
            }
          })
          .then(function(){
            var userStory = new models.UserStory(doc);
            return userStory.buildStoryInfo(index, obj);
          });
        }
      });
    });
  },
  getStories: function(paramsObj) {
    return new Promise(function(resolve, reject) {
      //var storyPromises = [];
      var stories = [], index = 0, stopFlag = false;
      /*
      for(index = 0; index < paramsObj.count; index++) {
        storyPromises.push(embeddedNotificationCtrl.popStory(paramsObj));
      }
      Promise.each(storyPromises, function(story) {
        stories.push(story);
      })
      .error(function(err){
        console.log('Stop building user stories');
      })
      */
      async.whilst(
          function() { return index < paramsObj.count && !stopFlag; },
          function(callback) {
            index++;
            embeddedNotificationCtrl.popStory(paramsObj)
            .then(function(story) {
              stories.push(story);
              callback(null);
            })
            .error(function(err){
              if(err.status === 'EndOfFeed') {
                stopFlag = dataObj.stopFlag;
                return callback(null);
              }
              callback(err);
            });
          },
          function (err) {
            if(err) return reject(err);
            resolve(stories);
          }
      );
    });
  }
};

module.exports = embeddedNotificationCtrl;
