const mongoose = required("mongoose");
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
    }
}, {timestamps: true});

const StaffProfile = mongoose.model("StaffProfile", staffProfileSchema);


