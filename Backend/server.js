import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import paymentRoutes from './routes/paymentRoutes.js';
import path from 'path';
import fs from 'fs';

dotenv.config();
connectDB();

const app = express();

// ✅ CORS setup
app.use(cors({
  origin: ["https://project-three-beta-njyppznuea.vercel.app", "http://localhost:5173"],
  credentials: true, // fixed spelling
}));

// ✅ Middleware
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Backend is live and connected");
});

// ✅ Ensure uploads folder exists
const uploadsDir = path.join(path.resolve(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// ✅ Static uploads
app.use('/uploads', express.static(uploadsDir));

// ✅ API routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({ error: 'Server error. Please try again later.' });
});

const PORT = process.env.PORT || 5000;

// ✅ Local only
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

// ✅ Export for Vercel
export default app;
