const express = require('express');
const { metaCredential} = require('../controller/admin/metaCridiantial');

const router = express.Router();

router.post('/meta',metaCredential);

module.exports = router;