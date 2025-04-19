const express = require('express');
const {metaCridiantial} = require('../controller/admin/metaCridiantial');

const router = express.Router();

router.post('/meta',metaCridiantial);

module.exports = router;