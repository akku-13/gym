const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contact");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use the contact routes
app.use("/contact", contactRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://akhileshkumar98951:xXsni3CQDqsElQSR@gym.waa3dgt.mongodb.net/?retryWrites=true&w=majority&appName=Gym",
)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
// Routes
const gymMemberRoutes = require('./routes/gymMembers');
app.use('/api/gymMembers', gymMemberRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
