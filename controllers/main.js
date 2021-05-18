// ====== IMPORTS ======


// ====== CONTROLLERS ======

// Display our Home Page controller
exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home page',
        path :'index',
    });
};

