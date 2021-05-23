/*jshint esversion: 6 */ 
// ====== REQUIRES ======
const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

// Landing page
router.get('/', (req, res, next) => {
    const blob = mainController.getIndex();
    res.render('index', {
        pageTitle: 'Home page',
        path :'/index',
        blob: blob
    });
    
});

// Search page
router.get('/search', mainController.getSearch);

// Handle Client Search
router.post('/client-search', (req, res, next) => {

    // Get client search results from controller
    mainController.postClientSearch(req)
    .then(clients => {
        // render the results
        res.render('search', {
            pageTitle: 'Client Search',
            path :'/search',
            search: clients.search,
            clients: clients
        });
    })
    .catch(err => console.log(err));

});

// Create voucher page
router.get('/add-voucher/:clientId', (req, res, next) => {

    // Get the selected clients object from the controller
    mainController.getAddVoucher(req)
    .then(client => {
        // render the results
        res.render('voucher', {
            pageTitle: 'Add a Voucher',
            path :'/voucher',
            clients: client
        });
    })
    .catch(err => console.log(err));
});

// Handle Creating voucher
router.post('/create-voucher', mainController.postCreateVoucher);

// About page
router.get('/about', mainController.getAbout);

module.exports = router;
