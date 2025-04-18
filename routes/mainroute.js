const express = require('express');
const getInTouchController = require('../controller/getInTouchController');
const authRoute = require('./authroute.js');
const adminRoute = require('./adminRoute.js');
const onboardRoute = require('./onboarding.js');


const router = express.Router();

//contact us route
router.post('/getInTouch',getInTouchController);

// authentication routes like signup and login
router.use('/auth',authRoute);

router.use('/onboard',onboardRoute);

router.use('/admin',adminRoute);

module.exports = router;