const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); // routes here is a function
const mongoose = require('mongoose');

const app = express();

//mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost:27017/muber', {useNewUrlParser: true});
}

// link the bodyParser with the express app,
// put above the routes, before we start to handle the routes
app.use(bodyParser.json());
routes(app); // attach the app to the route
app.use((err, req, res, next)=>{  // app.use to register middleware
        // err -> if previous middleware throw err
        // req -> incoming req
        // res -> response
        // next is a function, you call next to execute next middleware
    if(!err.isUndefined) {
        res.status(422).send({error: err.message});
    }
});
module.exports = app;
