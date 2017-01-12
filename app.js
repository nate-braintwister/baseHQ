const express = require('express');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/baseHQ');

const path = require('path');
//const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const main = require('./server/routes/mainRt');
const users = require('./server/routes/usersRt');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/', main);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
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

// Template global variables
app.locals.appname = "baseHQ";
app.locals.currentYear = new Date().getFullYear();
app.locals.developer = {
	name: 'Serenebula Appworks, LLC',
	url: 'https://serenebula.braintwister.io'
};
app.locals.data = require('./data.json');
app.locals.strapline = 'Room Rental on a Global Scale';
module.exports = app;
