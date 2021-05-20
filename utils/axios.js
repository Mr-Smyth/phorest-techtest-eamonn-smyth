// ====== IMPORTS ======
const axios = require('axios');

// Handle client search querys
exports.getClients = async function (search) {
    const clients = await axios.get(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/${search}`, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    });
    // return the data object of the response
    return clients.data;
}

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
