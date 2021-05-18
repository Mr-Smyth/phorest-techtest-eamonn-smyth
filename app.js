// ====== REQUIRES ======
const express = require('express');

// ------ REGISTER ROUTES ------

const app = express();
const mainRoutes = require('./routes/main');

// SETUP OUR EJS TEMPLATES
app.set('view engine', 'ejs');

// OUTSOURCED ROUTES
app.use('/', mainRoutes);

app.listen(3000);