// This is the template for a staffProfile as it is used by mongoose and therefore the Mongo db.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffProfileSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "A first name is required."]
    }, 
    lastName: {
        type: String,
        required: [true, "A last name is required."]
    }, 
    workLimit: {
        type: Number,
        min: [0, "Work Limit cannot be less than 0."],
        required: false
    }, 
    preferredName: {
        type: String,
        required: false
    }, 
    phoneNumber: {
        type: String,
        required: [true, "A phone number is required."]
    }, 
    address: {
        type: String,
        required: [true, "An address is required."]
    }, 
    email: {
        type: String,
        required: [true, "An email address is required."]
    },
    availability: {
        type: String,
        required: false
    },
}, {timestamps: true});

const StaffProfile = mongoose.model("StaffProfile", staffProfileSchema);
module.exports = StaffProfile;


