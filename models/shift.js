const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shiftSchema = new Schema({
    date: {
        type: Date,
        required: [true, "Date is required."]
    }, 
    location: {
        type: String,
        required: [true, "Location is required."]
    }, 
    startTime: {
        type: String,
        required: [true, "Start time is required."]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required."]
    },
    staffMember: {
        type: String,
        required: false
    }
}, {timestamps: true});

const Shift = mongoose.model("Shift", shiftSchema);
module.exports = Shift;

