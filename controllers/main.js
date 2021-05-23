/*jshint esversion: 6 */ 
// ====== IMPORTS ======
const axiosHelpers = require('../utils/axios-fetch');
const dateHelpers = require('../utils/dates');
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
    return 'Mr. Blobby';
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
 * * Get the client data
 * * Include the original search query
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @returns {Promise} - A promise containing the clients data - or a blank object. Also included inside this promise is the original search query
 */
exports.postClientSearch = (req, res, next) => {

    // Sort out what search we are getting and assign it to a search variable
    const searchedPhone = req.body.phone;
    const searchedEmail = req.body.email;
    // Undefined is Falsey so use a ternary just to define our search depending on what the user has entered
    let search = (searchedPhone)? `client?phone=${searchedPhone}`:(searchedEmail)? `client?email=${searchedEmail}`: '' ;
    
    // return the response of the API call via the axios helper to search clients
    return axiosHelpers.getClientSearch(search)    
    .then(response => {
        let clients = {}
        if (response.data.page.size > 0) {
            clients = response.data._embedded.clients
        }
        // i want to include the original search in the template - so i will include it in the client
        clients.search = search
        return clients
    })
    .catch(err => console.log(err));
};

/**
 * Display our Voucher create page
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @returns {Promise} - A promise containing the selected clients data object
 */
exports.getAddVoucher = (req, res, next) => {
    // we pass the selected clients Id from the search results
    const clientId = req.params.clientId;

    // i want to get the client we are creating the voucher for, so i can personalize the template
    const search = `client/${clientId}`;

    return axiosHelpers.getClientById(search)    
    .then(response => {
        let clients = {}
        if (response) {
            clients = response.data
        }
        return clients
    })
    .catch(err => console.log(err));
};


/**
 * Handle creating a voucher
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postCreateVoucher = (req, res, next) => {
    let voucher = {};
    let success = false;

    const clientId = req.body.clientId;
    const amount = req.body.amount;

    // get the client - as i want to personalise the response with the clients name
    const search = `client/${clientId}`;
    axiosHelpers.getClients(search)    
    .then(response => {
        // our response should include an object containing our client
        let client = [];
        // check if we got any data from the search - if yes assign it to clients
        if (response) {
            client = response;
        }
        return client;
    })
    .then(client => {
        // setup our voucher data
        let voucherData = {
                        clientId: clientId,
                        creatingBranchId: process.env.BRANCH_ID,
                        expiryDate: dateHelpers.nextYearISOS,
                        issueDate: dateHelpers.todayISOS,
                        originalBalance: amount
                    };

        // post the voucher
        axiosHelpers.postVoucher(voucherData)   
        .then(response => {
            if (response.status === 201) {
                voucher = {voucherData: response.data, client: client};
                success = true;
            } else {
                success = false;
            }
            res.render('voucher', {
                pageTitle: (success)? 'Voucher Created!': 'Error Creating voucher',
                path :'/voucher-create',
                voucher: voucher
            });
        });
    })
    .catch(error => console.error(error));
};


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

