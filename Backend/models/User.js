const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firebaseId: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    phoneNumber: { type: String, required: true },
    profilePicture: { type: String },
    paymentHistory: { type: [String] }  // Corrected to be an array of strings
});

const User = mongoose.model('User', userSchema);
module.exports = User;
