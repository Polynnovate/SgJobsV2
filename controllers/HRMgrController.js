var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var hrmgrController = {};

// Restrict access to root page
hrmgrController.home = function(req, res) {
  res.render('indexHRMgr', { user : req.user });
};

// Go to registration page
hrmgrController.register = function(req, res) {
  res.render('register');
};

// Post registration
hrmgrController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
hrmgrController.login = function(req, res) {
  res.render('login');
};

// Post login
hrmgrController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
hrmgrController.logout = function(req, res) {
  req.logout();
  //res.redirect('/');
  res.render('carousel');
};

module.exports = hrmgrController;
