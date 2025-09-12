const express = require('express');
const router = express.Router();
const GymMember = require('../models/GymMember');

// POST route to save the form data
router.post('/', async (req, res) => {
  try {
    const newGymMember = new GymMember(req.body);
    await newGymMember.save();
    res.status(201).json({ message: 'Gym member created successfully!', newGymMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving data to MongoDB' });
  }
});

module.exports = router;
