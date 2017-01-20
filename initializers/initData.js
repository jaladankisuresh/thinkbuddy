var notificationType = [
  ['ACT_TYPE_POST_COMMENT', 'ACT_TYPE_GALLERY_COMMENT', 'ACT_TYPE_STATUS_UPDATE_COMMENT', 'ACT_TYPE_POST_LIKE',
    'ACT_TYPE_GALLERY_LIKE', 'ACT_TYPE_STATUS_UPDATE_LIKE'],
  ['ACT_TYPE_NEW_PROFILE_FOLLOWING', 'ACT_TYPE_NEW_PROFILE_LIKE', 'ACT_TYPE_GROUP_NEW_MEMBER'],
  ['ACT_TYPE_NON_AGGR_1', 'ACT_TYPE_NON_AGGR_2', 'ACT_TYPE_NON_AGGR_3', 'ACT_TYPE_NON_AGGR_4', 'ACT_TYPE_NON_AGGR_5']
];
var actorCollection = ['user1', 'user2', 'user3', 'user4', 'user5', 'group1', 'group2'];
var targetCollection = ['match1', 'match2', 'match3', 'sport1', 'sport2'];

module.exports = {
  notificationType : notificationType,
  actorCollection : actorCollection,
  targetCollection : targetCollection
}
