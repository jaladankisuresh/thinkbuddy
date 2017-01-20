var uuid = require('uuid');
var moment = require('moment');
var thinky = require('../configurations/thinky');
var data = require('./initData');
var r = thinky.r;


for(index = 0; index < 10000; index++) {
  let xIndex = getRandom(data.notificationType);
  let yIndex = getRandom(data.notificationType[xIndex]);
  let actorIndex = getRandom(data.actorCollection);
  let targetIndex = getRandom(data.targetCollection);
  /*
  id: type.string(),
  type: type.string(),
  actor: type.string(),
  target: type.string(),
  date: type.string() */
  r.table("NotificationFeed").insert(
    {
        id: uuid.v4(),
        type: data.notificationType[xIndex][yIndex],
        actor: data.actorCollection[actorIndex],
        target: data.targetCollection[targetIndex],
        date: moment().toISOString()
    }).run()
  .then(function(result) {
    console.log(result);
  })
  .error(function(err) {
    console.log(error.message);
  });
}

function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
};

//controllers.userNotificationCtrl.add(notification1, testDataUtil.onSuccess, testDataUtil.onError);
