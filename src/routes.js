const express = require('express');
const router = express.Router();

const testModule = require('./modules/testModule');

router.get('/encoded-url', testModule.getEncodedUrl);
router.get('/original-url', testModule.getOriginalUrl);

module.exports = router;