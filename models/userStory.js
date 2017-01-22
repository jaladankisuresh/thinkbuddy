var sprintf = require('sprintf-js').sprintf;
var Promise = require('bluebird');

var UserStory = class UserStory {
  constructor (doc) {
    this.id = doc.id;
    this.type = doc.type;
  }

  buildStoryInfo(typeCategory, data){
    var models = require('../models/models');
    return models.notificationType.getAll(this.type, {index: "type"}).run()
    .then(function(docs){
      let doc = docs[0];
      return doc.displayText;
    })
    .then( displayText =>  {
      return new Promise( (resolve, reject) => {
        switch(typeCategory) {
          case 0:
            //target grouping
            this.actor = data.itemArr;
            this.target = data.item;
            break;
          case 1:
            //actor grouping
            this.actor = data.item;
            this.target = data.itemArr;
            break;
          default:
            //no grouping
            this.actor = data.item;
            this.target = data.itemArr;
            break;
        }
        this.title = this.description = sprintf("%1$s %2$s %3$s",
            this.actor, displayText, this.target);
        resolve(this);
      });
    });
  }
}

module.exports = UserStory;
