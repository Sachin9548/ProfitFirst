const express = require('express');
const {onboardStep1, onboardStep2, currentStep} = require('../controller/onboarding/onboarding');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/step',auth,currentStep);
router.post('/step1',auth,onboardStep1);
router.post('/step2',auth,onboardStep2);

module.exports = router;
