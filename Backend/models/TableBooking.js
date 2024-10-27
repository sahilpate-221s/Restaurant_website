const mongoose = require('mongoose');

const TableBookingSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    date: { type: Date, required: true, min: Date.now }, // Ensures booking is for future dates
    time: { type: String, required: true }, // Changed to string for easier representation
    numberOfPeople: { type: Number, required: true, min: 1 } // Renamed and added min validation
});

const TableBooking = mongoose.model("TableBooking", TableBookingSchema);

module.exports = TableBooking;
