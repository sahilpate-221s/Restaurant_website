const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));





// Start the server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
