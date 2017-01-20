var nosqlModels = require('../models/models');
var thinky = require('../configurations/thinky');
var Promise = require('bluebird');
var r = thinky.r;

var profileNetworkCtrl = {
  get: function(id) {
    return nosqlModels.profileNetwork.get(id).run();
  },
  add: function(obj) {
    var profileNetwork = new nosqlModels.profileNetwork(obj);
    return profileNetwork.save();
  },
  update: function(obj) {
    nosqlModels.profileNetwork.get(id).run()
    .then(function(networkObj){
      return networkObj.merge(obj).save();
    })
    .error(function(err){
      return Promise.reject(err);
    });
  }
};

module.exports = profileNetworkCtrl;
