var sprintf = require('sprintf-js').sprintf;

var UserStory = class UserStory {
  constructor (doc) {
    this.id = doc.id;
    this.type = doc.type;
    this.actor = doc.actor;
    this.target = doc.target;
    this.title = '';
    this.description = '';
  }

  generateTitleDesc(typeCategory, data){
      switch(typeCategory) {
        case 0:
          //target grouping
          this.title = this.description = sprintf("Notification Target Group by %1$s for %2$s",
              data.itemArr.join(), data.item);
          break;
        case 1:
          //actor grouping
          this.title = this.description = sprintf("Notification Actor Group by %1$s for %2$s",
              data.item, data.itemArr.join());
          break;
        default:
          //no grouping
          this.title = this.description = sprintf("Notification Standard by %1$s for %2$s",
              data.item, data.itemArr.join());
          break;
      }
  }
}

module.exports = UserStory;
