// ====== IMPORTS ======
const axios = require('axios');

// Make get request for client data using async await to wait for our response
exports.getClients = async function (search) {
    const clients = await axios.get(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?${search}`, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    })
    // return the data object of the response
    return clients.data;
}