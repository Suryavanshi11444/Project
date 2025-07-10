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

// ✅ Define allowed origins (adjust for production)
const allowedOrigins = ['http://localhost:5173'];

// ✅ Proper CORS setup with credentials
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// ✅ Express middleware
app.use(express.json()); // Parse JSON body

// ✅ Ensure uploads folder exists
const uploadsDir = path.join(path.resolve(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// ✅ Serve static uploads
app.use('/uploads', express.static(uploadsDir));

// ✅ API routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({ error: 'Server error. Please try again later.' });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
