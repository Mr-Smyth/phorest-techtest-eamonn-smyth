// ====== IMPORTS ======
const axios = require('axios');



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
        clients: []
    });
};

exports.postClientSearch = (req, res, next) => {
    axios.get('https://api-gateway-dev.phorest.com/third-party-api-server/api/business/eTC3QY5W3p_HmGHezKfxJw/client?phone=353858624723', {
        auth: {
            username: 'global/cloud@apiexamples.com',
            password: 'VMlRo/eh+Xd8M~l'
        }
    })
    .then(response => {
        console.log(response.status); // 200
        console.log(response.data._embedded.clients);
        return response.data._embedded.clients;
    })
    .then(clients => {
        res.render('search', {
            pageTitle: 'Client Search',
            path :'/search',
            clients: clients 
        });
    })
    .catch(err => console.log(err));
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

