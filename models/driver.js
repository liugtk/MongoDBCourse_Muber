const mongoose = requrie('mongoose');
const Schema = mongoose.Schema;


const DriverSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    driving : {
        type: boolean,
        default: false,
    }
    // location: [Number]
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;