const mongoose = require('mongoose');


before(done=>{

    mongoose.connect('mongodb://localhost:27017/test_muber',{useNewUrlParser: true})
    mongoose.connection
        .once('open', ()=>done())
        .on('error', err =>{
            console.warn('warning', error);
        })

});

beforeEach(done=>{
    const {drivers} = mongoose.connection.collections;
    drivers.drop()
        .then(()=>done())
        .catch(()=>done());
});