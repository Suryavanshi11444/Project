// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // @route   POST /api/auth/register
// // @desc    Register new user
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   // Basic validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ error: "Please fill all fields" });
//   }

//   try {
//     // Check for existing user
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save user
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Registration Error:", error);
//     res.status(500).json({ error: "Server error during registration" });
//   }
// });

// // @route   POST /api/auth/login
// // @desc    Login user and return token
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Basic validation
//   if (!email || !password) {
//     return res.status(400).json({ error: "Please fill all fields" });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid password" });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     // Exclude password in response
//     const { password: _, ...userData } = user._doc;

//     res.json({
//       message: "Login successful",
//       token,
//       user: userData
//     });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ error: "Server error during login" });
//   }
// });

// module.exports = router;

// routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @route   POST /api/auth/register
router.post("/register", async (req, res) => {
  const { name, email, password, role = "customer" } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ error: "Server error during registration" });
  }
});

// @route   POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Please fill all fields" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    const { password: _, ...userData } = user._doc;

    res.json({
      message: "Login successful",
      token,
      user: userData
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error during login" });
  }
});

module.exports = router;
