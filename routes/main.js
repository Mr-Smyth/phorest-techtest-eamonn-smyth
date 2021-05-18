
// ====== REQUIRES ======
const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

// Landing page
router.get('/', mainController.getIndex);

// Search page
router.get('/search', mainController.getSearch);

// Create voucher page
router.get('/voucher', mainController.getVoucher);

// About page
router.get('/about', mainController.getAbout);

module.exports = router;
