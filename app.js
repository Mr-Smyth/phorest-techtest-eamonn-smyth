const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    console.log('Welcome to Node Express!!');
    res.send('<html><body><h1>Home page test</h1></body></html>')
});

app.listen(3000);