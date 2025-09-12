const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, mobile, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      mobile,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "An error occurred while saving your message." });
  }
});

module.exports = router;
