const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); // routes here is a function

const app = express();


// link the bodyParser with the express app,
// put above the routes, before we start to handle the routes
app.use(bodyParser.json());


routes(app); // attach the app to the route

module.exports = app;
