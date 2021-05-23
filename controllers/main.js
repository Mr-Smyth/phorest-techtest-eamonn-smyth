/*jshint esversion: 6 */ 
// ====== IMPORTS ======
const axiosHelpers = require('../utils/axios-fetch');
const dateHelpers = require('../utils/dates');
require('dotenv').config();

// ====== CONTROLLERS ======

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
    
    // default variables
    let clients = {}

    // we pass the selected clients Id from the search results
    const clientId = req.params.clientId;

    // i want to get the client we are creating the voucher for, so i can personalize the template
    const search = `client/${clientId}`;

    return axiosHelpers.getClientById(search)    
    .then(response => {
        if (response.status === 200) {
            clients = response.data;
            clients.status = response.status;
        }
        else {
            clients.status = response.status;
        }
        return clients;
    })
    .catch(err => console.log(err));
};


/**
 * Handle creating a voucher
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @returns {Promise} - A promise containing the created voucher data, client data and a success flag
 */
exports.postCreateVoucher = (req, res, next) => {

    // some default variables
    let voucher = {};
    let client = {};

    // get stuff from the body
    const clientId = req.body.clientId;
    const amount = req.body.amount;

    // get the client - i want to insert the client into the voucher when returned
    const search = `client/${clientId}`;
    return axiosHelpers.getClientById(search)    
    .then(response => {
        // check if we got any data from the search - if yes assign it to client      
        if (response.status === 200) {
            client = response.data;
        }
        return client;
    })

    // Now deal with the voucher
    .then(client => {
        let voucherData = {
            clientId: clientId,
            creatingBranchId: process.env.BRANCH_ID,
            expiryDate: dateHelpers.nextYearISOS,
            issueDate: dateHelpers.todayISOS,
            originalBalance: amount
        };

        // post the voucher
        return axiosHelpers.postVoucher(voucherData)   

        // I want to return a voucher object with the voucher, client and a success flag
        .then(response => {
            if (response.status === 201) {
                voucher.voucherData = response.data;
                voucher.client = client;
                voucher.success = true;
            } else {
                voucher.success = false;
            } 
            return voucher;
        });
    })
    .catch(error => console.error(error));
};