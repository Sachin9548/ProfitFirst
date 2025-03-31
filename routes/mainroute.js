const express = require('express');
const getInTouchController = require('../controller/getInTouchController');
const router = express.Router();
router.post('/getInTouch',getInTouchController  );
module.exports = router;