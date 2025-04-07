const express = require('express');
const getInTouchController = require('../controller/getInTouchController');
const authRoute = require('./authroute.js');


const router = express.Router();

//contact us route
router.post('/getInTouch',getInTouchController);

// authentication routes like signup and login
router.use('/auth',authRoute);

module.exports = router;