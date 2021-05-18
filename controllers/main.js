// ====== IMPORTS ======


// ====== CONTROLLERS ======

// Display our Home Page controller
exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home page',
        path :'index',
    });
};

exports.getSearch = (req, res, next) => {
    res.render('search', {
        pageTitle: 'Client Search',
        path :'search',
    });
};

exports.getVoucher = (req, res, next) => {
    res.render('voucher', {
        pageTitle: 'Voucher Create',
        path :'index',
    });
};

exports.getAbout = (req, res, next) => {
    res.render('about', {
        pageTitle: 'About page',
        path :'about',
    });
};

