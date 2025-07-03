// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/auth"); // ✅ Import auth.js

// dotenv.config(); // Load variables from .env

// const app = express();

// // ✅ Middleware
// app.use(cors({
//   origin: "http://localhost:5173", // frontend
//   credentials: true,
// }));
// app.use(express.json()); // to parse JSON bodies

// // ✅ Connect MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   // useNewUrlParser and useUnifiedTopology are now ignored in Mongoose 7+
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log("MongoDB connection error:", err));

// // ✅ Use auth routes
// app.use("/api/auth", authRoutes); // 🔥 THIS LINE FIXES THE ISSUE

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.cjs (or server.js if CommonJS)
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
