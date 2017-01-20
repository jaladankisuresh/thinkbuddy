var path = require('path');
//var favicon = require('serve-favicon');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./configurations/config');
var routes = require('./routes/routes');

var app = express();
//var http = require('http').createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes.webApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

// production error handler
// no stacktraces leaked to user
/*app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

// Start server
var appServer = app.listen(config.expressPort, function(){
    console.log("Express server listening on port %d in %s mode",
        config.expressPort, app.settings.env);
});

var socketio = require('socket.io').listen(appServer);

//Listen on Web socket - Modularize all the socket.io routing in a seperate module
routes.socket(socketio);
