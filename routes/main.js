/*jshint esversion: 6 */ 
// ====== REQUIRES ======
const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

// Landing page
router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home page',
        path :'/index',
    });
});

// Search page
router.get('/search',(req, res, next) => {
    res.render('search', {
        pageTitle: 'Client Search',
        path :'/search',
        clients: 'none'
    });
});

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
router.post('/create-voucher', (req, res, next) => {

    // call controller to create voucher
    mainController.postCreateVoucher(req)
    .then(voucher => {
        // render the Template
        res.render('voucher', {
            pageTitle: (voucher.success)? 'Voucher Created!': 'Error Creating voucher',
            path :'/voucher-create',
            voucher: voucher
        });
    });
});

// About page
router.get('/about', (req, res, next) => {
    res.render('about', {
        pageTitle: 'About page',
        path :'/about',
    });
});

module.exports = router;
