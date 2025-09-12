const mongoose = require('mongoose');

const gymMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  trainingPreferences: { type: [String], required: true },
});

module.exports = mongoose.model('GymMember', gymMemberSchema);
