var path = require('path');
var moment = require('moment');
var thinky = require('../configurations/thinky');
var type = thinky.type;
var r = thinky.r;

var NotificationFeed = thinky.createModel('NotificationFeed', {
    id: type.string(),
    type: type.string(),
    actor: type.string(),
    target: type.string(),
    date: type.date()
            .default(moment().toISOString())
            .validator(function(val) {
              moment(val).isValid();
            })
});

// Make sure that an index on date is available
NotificationFeed.ensureIndex("date");

module.exports = NotificationFeed;
