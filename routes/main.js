
// ====== REQUIRES ======
const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

// Landing page
router.get('/', mainController.getIndex);

module.exports = router;
