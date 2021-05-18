// ====== REQUIRES ======
const path = require('path');
const express = require('express');


// ------ REGISTER ROUTES ------

const app = express();
const mainRoutes = require('./routes/main');
const errorController = require('./controllers/error');

// TELL EXPRESS TO LOOK IN PUBLIC FOLDER FOR LOCAL ASSETS
app.use(express.static(path.join(__dirname, 'public')));

// SETUP OUR EJS TEMPLATES
app.set('view engine', 'ejs');

// OUTSOURCED ROUTES
app.use('/', mainRoutes);
app.use(errorController.get404);

app.listen(3000);