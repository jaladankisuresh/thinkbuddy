var uuid = require('uuid');
var moment = require('moment');
var thinky = require('../configurations/thinky');
var r = thinky.r;
/*
id: type.string(),
type: type.string(),
displayText: type.string()

var notificationType = [
  ['ACT_TYPE_POST_COMMENT', 'ACT_TYPE_GALLERY_COMMENT', 'ACT_TYPE_STATUS_UPDATE_COMMENT', 'ACT_TYPE_POST_LIKE',
    'ACT_TYPE_GALLERY_LIKE', 'ACT_TYPE_STATUS_UPDATE_LIKE'],
  ['ACT_TYPE_NEW_PROFILE_FOLLOWING', 'ACT_TYPE_NEW_PROFILE_LIKE', 'ACT_TYPE_GROUP_NEW_MEMBER'],
  ['ACT_TYPE_NON_AGGR_1', 'ACT_TYPE_NON_AGGR_2', 'ACT_TYPE_NON_AGGR_3', 'ACT_TYPE_NON_AGGR_4', 'ACT_TYPE_NON_AGGR_5']
];
*/
r.table("NotificationType").insert([
  {
      id: uuid.v4(),
      type: "ACT_TYPE_POST_COMMENT",
      displayText: "commented on post"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_GALLERY_COMMENT",
      displayText: "commented on gallery of"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_STATUS_UPDATE_COMMENT",
      displayText: "commented on status change of"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_POST_LIKE",
      displayText: "liked the post of"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_GALLERY_LIKE",
      displayText: "liked the gallery of"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_STATUS_UPDATE_LIKE",
      displayText: "liked the status update of"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_NEW_PROFILE_FOLLOWING",
      displayText: "following profile of"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_NEW_PROFILE_LIKE",
      displayText: "likes profile of"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_GROUP_NEW_MEMBER",
      displayText: "has joined the group"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_NON_AGGR_1",
      displayText: "ACT_TYPE_NON_AGGR_1"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_NON_AGGR_2",
      displayText: "ACT_TYPE_NON_AGGR_2"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_NON_AGGR_3",
      displayText: "ACT_TYPE_NON_AGGR_3"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_NON_AGGR_4",
      displayText: "ACT_TYPE_NON_AGGR_4"
  },
  {
      id: uuid.v4(),
      type: "ACT_TYPE_NON_AGGR_5",
      displayText: "ACT_TYPE_NON_AGGR_5"
  }]).run()
  .then(function(result) {
    console.log(result);
  })
  .error(function(err) {
    console.log(error.message);
  });
