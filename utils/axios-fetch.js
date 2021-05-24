/*jshint esversion: 6 */ 

// ====== IMPORTS ======
const axios = require('axios');

// Handle client search querys
exports.getClientSearch = function (search) {
    return axios.get(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/${search}`, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    })
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(`Error: There was a ${err.response.data.status} response`);
        console.log(`* The error is "${err.response.data.error}"`);
        console.log(`* Error: The error message is "${err.response.data.message}"`);
        return null;
    });
};

// Making a seperate call for this as the returned data format i want to test is different when fetching a client by id
// Handle single client search
exports.getClientById = function (search) {
    return axios.get(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/${search}`, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    })
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(`Error: There was a ${err.response.data.status} response`);
        console.log(`* The error is "${err.response.data.error}"`);
        console.log(`* Error: The error message is "${err.response.data.message}"`);
        return null;
    });
};

// Handle Voucher creation post requests
exports.postVoucher = function (voucherData) {
    return axios.post(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher`, voucherData, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    })
    .then(response => {
        return response;
    })
    .catch(err => {
        console.log(`Error: There was a ${err.response.data.status} response`);
        console.log(`* The error is "${err.response.data.error}"`);
        console.log(`* Error: The error message is "${err.response.data.message}"`);
        return null;
    });
};

