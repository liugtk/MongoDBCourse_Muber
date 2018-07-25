const express = require('express');
const routes = require('./routes/routes'); // routes here is a function

const app = express();

routes(app); // attach the app to the route

module.exports = app;
