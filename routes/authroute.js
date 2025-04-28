const express = require('express');
const {signupController, varifyemail} = require('../controller/auth/signupController');
const {default: facebookLogin} = require('../controller/auth/facebookLogin');
const {default: loginController} = require('../controller/auth/loginController');
const router = express.Router();

router.post('/signup',signupController);
router.get('/verify-email/:token',varifyemail);
router.post('/login',loginController);

router.get('/facebook/callback',facebookLogin);

module.exports = router;




