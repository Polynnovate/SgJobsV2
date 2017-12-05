var mongoose = require("mongoose");
var passport = require("passport");
//var Candidate = require("../models/Candidate");

var User = require("../models/User");
var CandidateDetail = require("../models/CandidateDetail");

var candController = {};

var async = require('async');

// Restrict access to root page
candController.home = function(req, res) {
  res.render('indexCandDash', { user : req.user, id : req.id });
};


candController.calendarEvents = function(req, res) {
  res.render('calendarEvents', { user : req.user });
};


candController.genForm = function(req, res) {
  res.render('candGenForm', { user : req.user });
};


candController.dogenForm = function(req, res, next) {

    //req.checkBody('title', 'Title must not be empty.').notEmpty();
    //req.checkBody('user', 'User must not be empty').notEmpty();
    //req.checkBody('summary', 'Summary must not be empty').notEmpty();
    //req.checkBody('noticeperiod', 'Notice Period must not be empty').notEmpty();
    //req.checkBody('jobdesc', 'Job Desc must not be empty').notEmpty();

    //req.sanitize('title').escape();
    //req.sanitize('user').escape();
    //req.sanitize('summary').escape();
    //req.sanitize('noticeperiod').escape();
    //req.sanitize('jobdesc').escape();

    //req.sanitize('title').trim();
    //req.sanitize('user').trim();
    //req.sanitize('summary').trim();
    //req.sanitize('noticeperiod').trim();  
    //req.sanitize('jobdesc').trim();

    var candidateDetail = new CandidateDetail(
      { title: req.body.title,
        user: req.user.id,
        summary: req.body.summary,
        noticeperiod: req.body.noticeperiod,
	jobdesc: req.body.jobdesc
       });

    console.log('CandidateDetail: '+candidateDetail);

    candidateDetail.save(function (err) {
    if (err) { return next(err); }
          //Genre saved. Redirect to genre detail page
           res.redirect("/");
    });


    


};


// Go to login page
candController.login = function(req, res) {
  res.render('loginCand');
};

// Post login
candController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/candidate');
  });
};



candController.candToDoList = function(req, res) {
  res.render('candToDoList', { user : req.user });
};


candController.candBasicTable = function(req, res) {
  res.render('candBasicTable', { user : req.user });
};


candController.candResponsiveTable = function(req, res) {
  res.render('candResponsiveTable', { user : req.user });
};






// Go to registration page
// Go to registration page
candController.register = function(req, res) {
  res.render('registerCand');
};

// Post registration
// Post registration
candController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('registerCand', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/candidate');
    });
  });
};


// logout
candController.logout = function(req, res) {
  req.logout();
  //res.redirect('/');
  res.render('carousel');
};

module.exports = candController;
