const express = require('express');
const {signupController, varifyemail} = require('../controller/auth/signupController');
const {loginController} = require('../controller/auth/loginController');
const router = express.Router();

router.post('/signup',signupController);
router.get('/verify-email/:token',varifyemail);
router.post('/login',loginController);

module.exports = router;




