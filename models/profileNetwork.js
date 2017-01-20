var thinky = require('../configurations/thinky');
var type = thinky.type;
var r = thinky.r;

var ProfileNetwork = thinky.createModel('ProfileNetwork', {
    id: type.string(),
    profileId: type.string(),
    referencesProfileId: type.string()
});

// Make sure that an index on profileId is available
ProfileNetwork.ensureIndex("profileId");

module.exports = ProfileNetwork;
