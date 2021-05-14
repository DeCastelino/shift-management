const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffProfileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: {
        type: String,
        required: true
    }, 
    workLimit: {
        type: Number,
        required: true
    }, 
    preferredName: {
        type: String,
        required: false
    }, 
    phoneNumber: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: false
    },
}, {timestamps: true});

const StaffProfile = mongoose.model("StaffProfile", staffProfileSchema);
module.exports = StaffProfile;


