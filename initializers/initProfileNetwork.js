//var controllers = require('./controllers/controllers');
//var socketApiHelper = require('./utils/socketApiHelper');
var uuid = require('uuid');
var thinky = require('../configurations/thinky');
var r = thinky.r;
/*
id: type.string(),
profileId: type.string(),
referencesProfileId: type.string()
*/
r.table("ProfileNetwork").insert([
        // User 1
        {
            id: uuid.v4(),
            profileId: "user1", //user 1
            referencesProfileId: "group2" //Group 2
        }, {
            id: uuid.v4(),
            profileId: "user1",
            referencesProfileId: "user5" //user 5
        }, {
            id: uuid.v4(),
            profileId: "user1",
            referencesProfileId: "user2" // user 2
        },
        // User 2
        {
            id: uuid.v4(),
            profileId: "user2", //user 2
            referencesProfileId: "user4" //User 4
        }, {
            id: uuid.v4(),
            profileId: "user2", //user 2
            referencesProfileId: "user5" //user 5
        }, {
            id: uuid.v4(),
            profileId: "user2", //user 2
            referencesProfileId: "user3" // user 3
        },
        // User 3
        {
            id: uuid.v4(),
            profileId: "user3", //user 3
            referencesProfileId: "user4" //User 4
        }, {
            id: uuid.v4(),
            profileId: "user3", //user 3
            referencesProfileId: "user1" //user 1
        }, {
            id: uuid.v4(),
            profileId: "user3", //user 3
            referencesProfileId: "group1" // Group 1
        },
        // User 4
        {
            id: uuid.v4(),
            profileId: "user4", //user 4
            referencesProfileId: "user2" //User 2
        }, {
            id: uuid.v4(),
            profileId: "user4", //user 4
            referencesProfileId: "user1" //user 1
        },
        // User 5
        {
            id: uuid.v4(),
            profileId: "user5", //user 5
            referencesProfileId: "user2" //User 2
        }, {
            id: uuid.v4(),
            profileId: "user5", //user 5
            referencesProfileId: "user4" //user 4
        },
        // Group 1
        {
            id: uuid.v4(),
            profileId: "group1", //group 1
            referencesProfileId: "user2" // user 2
        }, {
            id: uuid.v4(),
            profileId: "group1",
            referencesProfileId: "user4" //user 4
        }, {
            id: uuid.v4(),
            profileId: "group1",
            referencesProfileId: "user3" // user 3
        },
        // Group 2
        {
            id: uuid.v4(),
            profileId: "group2", //group 2
            referencesProfileId: "user2" // user 2
        }, {
            id: uuid.v4(),
            profileId: "group2",
            referencesProfileId: "user4" //user 4
        }, {
            id: uuid.v4(),
            profileId: "group2",
            referencesProfileId: "user1" // user 1
        }
    ]).run()
    .then(function(result) {
        console.log(result);
    })
    .error(function(err) {
        console.log(error.message);
    });

//controllers.userNotificationCtrl.add(notification1, testDataUtil.onSuccess, testDataUtil.onError);
