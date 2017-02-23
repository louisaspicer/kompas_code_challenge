var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var places = require('./routes/places');
var sent = require('./routes/sent');


var app = express();
var db = require('./models/db');
var User = require('./models/users');
var Place = require('./models/places');

// var models = require('./models/userData');
// var placeData = require('./models/placeData');

// var db = require('./models/db');
// var User = require('./models/users');
//
// var user1 = new User({firstName: "Louisa", lastName: "Spicer",
// 													age: "23", city: "London"});
//
// //save model to MongoDB
// user1.save(function (err) {
//   if (err) {
// 		return err;
//   }
//   else {
//   	console.log("Post saved");
//   }
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/places', places);
app.use('/sent', sent);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
