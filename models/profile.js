var thinky = require('../configurations/thinky');
var type = thinky.type;
var r = thinky.r;

var Profile = thinky.createModel('Profile', {
    id: type.string(),
    type: type.string(),
    firstName: type.string(),
    lastName: type.string()
});

// Make sure that an index on date is available
Profile.ensureIndex("type");

module.exports = Profile;
