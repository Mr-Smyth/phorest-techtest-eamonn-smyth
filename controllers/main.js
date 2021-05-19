// ====== IMPORTS ======
const axios = require('axios');
require('dotenv').config();


// ====== CONTROLLERS ======

// Display our Home Page controller
exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home page',
        path :'/index',
    });
};

exports.getSearch = (req, res, next) => {
    res.render('search', {
        pageTitle: 'Client Search',
        path :'/search',
        clients: 'none'
    });
};

exports.postClientSearch = (req, res, next) => {
    // Sort out what search we are getting and assign it to a search variable
    const searchedPhone = req.body.phone;
    const searchedEmail = req.body.email;
    let search = (searchedPhone)? `phone=${searchedPhone}`:(searchedEmail)? `email=${searchedEmail}`: '' ;

    // if (searchedPhone) {
    //     search = `phone=${searchedPhone}`;
    // }
    // else if (searchedEmail) {
    //     search = `email=${searchedEmail}`;
    // }
    axios.get(`https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?${search}`, {
        auth :{
            username: process.env.USER,
            password: process.env.PASSWORD
        }
    })
    .then(response => {
        return response.data;
    })
    .then(data => {
        let clients = [];
        // check if we got any data from the search - if yes assign it to clients
        if (data.page.size > 0) {
            clients = data._embedded.clients;
        }
        // render the results
        res.render('search', {
            pageTitle: 'Client Search',
            path :'/search',
            search: search,
            clients: clients
        });
    })
    .catch(err => console.log("beep"));
}

exports.getVoucher = (req, res, next) => {
    res.render('voucher', {
        pageTitle: 'Voucher Create',
        path :'/voucher',
    });
};

exports.getAbout = (req, res, next) => {
    res.render('about', {
        pageTitle: 'About page',
        path :'/about',
    });
};

