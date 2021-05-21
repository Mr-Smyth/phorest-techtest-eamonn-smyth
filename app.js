// ====== REQUIRES ======
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


// ------ REGISTER ROUTES ------
const app = express();
const port = process.env.PORT || 3000;
const mainRoutes = require('./routes/main');
const errorController = require('./controllers/error');

// PARSE THE BODY CONTENT
app.use(bodyParser.urlencoded({extended: false}));

// TELL EXPRESS TO LOOK IN PUBLIC FOLDER FOR LOCAL ASSETS
app.use(express.static(path.join(__dirname, 'public')));

// SETUP OUR EJS TEMPLATES
app.set('view engine', 'ejs');

// OUTSOURCED ROUTES
app.use('/', mainRoutes);
app.use(errorController.get404);

app.listen(port, () => console.log(`Listening on port ${port}`));