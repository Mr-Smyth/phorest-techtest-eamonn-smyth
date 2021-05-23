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
        // return the data object of the response
        return response
    })
    .catch(err => console.log(err));
};

// Making a new call for this as the returned data format i want to test is different when fetching a client by id
// Handle single client search
exports.getClientById = function (search) {
    return axios.get(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/${search}`, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    })
    .then(response => {
        // return the data object of the response
        return response
    })
    .catch(err => console.log(err));
};

// Handle Voucher creation post requests
exports.postVoucher = async function (voucherData) {
    const newVoucher = await axios.post(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/voucher`, voucherData, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    });
    return newVoucher;
}

