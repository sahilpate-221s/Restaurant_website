const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST /api/users/signup
router.post('/signup', async (req, res) => {
    const { firebaseId, username, email, address, phoneNumber, profilePicture } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            // Update user information if they already exist
            user.firebaseId = firebaseId; // Update Firebase ID
            user.username = username || user.username; // Update only if new username is provided
            user.address = address || user.address; // Keep existing if not provided
            user.phoneNumber = phoneNumber || user.phoneNumber; // Keep existing if not provided
            user.profilePicture = profilePicture || user.profilePicture; // Keep existing if not provided

            await user.save();
            return res.status(200).json({ message: 'User updated successfully', user });
        } else {
            // Create a new user
            user = new User({ firebaseId, username, email, address, phoneNumber, profilePicture });
            await user.save();
            return res.status(201).json({ message: 'User created successfully', user });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error processing request', error });
    }
});

module.exports = router;
