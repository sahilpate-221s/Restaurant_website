const mongoose = require('mongoose');
const nodemailer = require('nodemailer');


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {type: String,},
    phoneNumber : { type: String, required: true},
    profilePicture: { type: String, required: true},

})




const User = mongoose.model('User', userSchema);
module.exports = User;