const mongoose = require('mongoose');
require('dotenv').config();

// Get the MongoDB URL from environment variables
const mongoURL = process.env.MONGO_URL;

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit the application if the connection fails
    }
};

// Export the connectDB function for use in other files
module.exports = connectDB;
