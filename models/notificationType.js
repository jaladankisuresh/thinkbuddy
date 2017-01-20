var path = require('path');
var moment = require('moment');
var thinky = require('../configurations/thinky');
var type = thinky.type;
var r = thinky.r;

var NotificationType = thinky.createModel('NotificationType', {
    id: type.string(),
    type: type.string(),
    displayText: type.string()
});

// Make sure that an index on date is available
NotificationType.ensureIndex("type");

module.exports = NotificationType;
