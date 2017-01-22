var thinky = require('../configurations/thinky');
var r = thinky.r;
var socketRoutes = function(socketio) {
  socketio.of('/notification')
    .on('connection', function (notificationSocket) {
      var cursorObj = null;
      console.log("Client Connected to notifications");

      r.table('NotificationFeed').changes()
     .filter(
       r.row('new_val').ne(null)
       .and(r.row('old_val').eq(null))
      )('new_val').run()
     .then(function(cursor) {
       cursorObj = cursor;
       cursor.each(function(err, change) {
         if (err) {
           console.log(err.toString());
           console.log(err.stack);
           return;
         }
         notificationSocket.emit('new notification', change);
         console.log(change);
       });
     })
     .error(function(err) {
       console.log(err);
     });

      notificationSocket.on('add', function (data) {
        controllers.notificationCtrl.add(data)
        .then(function(data) {
          console.log(JSON.stringfy(data));
        })
        .error(function(error){
          console.log(error.message);
        });
      });

      notificationSocket.on('disconnect', function () {
        if(cursorObj) cursorObj.close();
        console.log("Client Disconnected from notifications");
      });
    });
}

module.exports = socketRoutes;
