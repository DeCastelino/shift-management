const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
    date: {
        type: Date,
        required: true
    }, 
    location: {
        type: String,
        required: true
    }, 
    staffMember: {
        type: String,
        required: false
    }
}, {timestamps: true});

const Shift = mongoose.model("Shift", shiftSchema);
module.exports = Shift;

