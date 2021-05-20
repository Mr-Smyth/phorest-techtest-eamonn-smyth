// ====== IMPORTS ======
const axios = require('axios');
const axiosHelpers = require('../utils/axios');
require('dotenv').config();



// ====== CONTROLLERS ======

/**
 * Display our Home Page controller
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home page',
        path :'/index',
    });
};

/**
 * Display our Search page - pass clients as none to satisfy the ejs logic looking for clients
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getSearch = (req, res, next) => {
    res.render('search', {
        pageTitle: 'Client Search',
        path :'/search',
        clients: 'none'
    });
};

/**
 * Handle The client search functionality
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postClientSearch = (req, res, next) => {
    // Sort out what search we are getting and assign it to a search variable
    const searchedPhone = req.body.phone;
    const searchedEmail = req.body.email;
    // Ternary just to define our search depending on what the user has entered
    let search = (searchedPhone)? `client?phone=${searchedPhone}`:(searchedEmail)? `client?email=${searchedEmail}`: '' ;

    // call custom axios util to search clients
    axiosHelpers.getClients(search)    
    .then(response => {
        let clients = [];
        
        // check if we got any data from the search - if yes assign it to clients
        if (response.page.size > 0) {
            clients = response._embedded.clients;
        }
        
        // render the results
        res.render('search', {
            pageTitle: 'Client Search',
            path :'/search',
            search: search,
            clients: clients
        });
    })
    .catch(err => console.log(err));
}

/**
 * Display our Voucher create page
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getVoucher = (req, res, next) => {
    // we pass the selected clients Id from the search results
    const clientId = req.params.clientId;

    // i want to get the client we are creating the voucher for, so i can personalize the template
    const search = `client/${clientId}`;
    axiosHelpers.getClients(search)    
    .then(response => {
        // our response should include an object containing our client
        console.log(response)
        let client = [];
        // check if we got any data from the search - if yes assign it to clients
        if (response) {
            client = response;
        }
        // render the results
        res.render('voucher', {
            pageTitle: 'Add a Voucher',
            path :'/voucher',
            clients: client
        });
    })
    .catch(err => console.log(err));
};

/**
 * Handle Voucher creation
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postCreateVoucher = (req, res, next) => {
    const success = true;
    res.render('voucher', {
        pageTitle: (success)? 'Voucher Created': 'Error Creating voucher',
        path :'/voucher-create',
        clients: null
    });
}

/**
 * Display our About page
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAbout = (req, res, next) => {
    res.render('about', {
        pageTitle: 'About page',
        path :'/about',
    });
};

