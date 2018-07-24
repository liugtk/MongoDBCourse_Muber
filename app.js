const express = require('express');
const app = express();

app.get('/api',(req, res)=>{    // call back function with req and res
        res.send({message: "hi there"});
});


module.exports = app;
