//app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
const routeur = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/products', product);

let port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

