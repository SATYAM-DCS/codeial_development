const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controllers');

router.get('/profile', passport.checkAuthentication,usersController.profile);

router.get('/sign-up',usersController.signUp);
router.get('/sign-in', usersController.signIn);

// make profile page accessible when user is signed in only
//router.get('/profile',passport.checkAuthentication,usersController.profile);


router.post('/create',usersController.create);
//router.post('/create-session',usersController.createSession);
// use passport as a middleware to authenticate

router.post('/create-session',passport.authenticate(
      'local',
      {  failureRedirect: '/users/sign-in'},

),  
  usersController.createSession
);
router.get('/sign-out',usersController.destroySession);

module.exports = router;