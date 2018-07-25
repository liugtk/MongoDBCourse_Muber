
const DriversController = require('../controllers/drivers_controller'); // functions




module.exports = (app)=>
    {
        app.get('/api', DriversController.greeting);
    };