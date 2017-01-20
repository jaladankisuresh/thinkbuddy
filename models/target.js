var thinky = require('../configurations/thinky');
var type = thinky.type;
var r = thinky.r;

var Target = thinky.createModel('Target', {
    id: type.string(),
    type: type.string(),
    title: type.string(),
    description: type.string()
});

// Make sure that an index on date is available
Target.ensureIndex("type");

module.exports = Target;
