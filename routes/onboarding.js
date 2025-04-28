const express = require('express');
const {currentStep, onboardStep1, onboardStep2, onboardStep4, fetchproduct, manufacture, onboardStep5} = require('../controller/onboarding/onboarding');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/step',auth,currentStep);
router.post('/step1',auth,onboardStep1);
router.post('/step2',auth,onboardStep2);

router.get('/fetchproduct',auth,fetchproduct);
router.post('/modifyprice',auth,manufacture);

router.post('/step4',auth,onboardStep4);
router.post('/step5',auth,onboardStep5);

module.exports = router;
