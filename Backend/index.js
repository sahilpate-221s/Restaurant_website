const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database'); // Import the connectDB function
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectDB(); // Call the function to connect to MongoDB

// Use user routes
app.use('/api/users', userRoutes); // Prefix for user routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
