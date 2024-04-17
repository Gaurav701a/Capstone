// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName) {
      return res.status(400).send("Username is required");
    }

    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    const user = new User({ userName, password });

    await user.save();

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) return res.status(404).send("User not found");
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).send("Invalid credentials");
    const token = jwt.sign({ userId: user._id }, "capstone");
    res.status(200).json({ token, userName });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
});

module.exports = router;
