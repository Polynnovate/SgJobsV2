var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var cand = require("../controllers/CandController.js");
var hrmgr = require("../controllers/HRMgrController.js");

// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);


router.get('/candidate', cand.home);


router.get('/calendarEvents', cand.calendarEvents);


router.get('/candidateForm', cand.genForm);
router.post('/candidateForm', cand.dogenForm);


router.get('/candLogin', cand.login);
router.post('/candLogin', cand.doLogin);




router.get('/candRegister', cand.register);
router.post('/candRegister', cand.doRegister);




router.get('/candToDoList', cand.candToDoList);


router.get('/candBasicTable', cand.candBasicTable);

router.get('/candResponsiveTable', cand.candResponsiveTable);



router.get('/hrmanager', hrmgr.home);


module.exports = router;
