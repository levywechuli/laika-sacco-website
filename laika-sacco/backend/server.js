const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const connectDB = require('./config/database');

// Import Routes
const authRoutes = require('./routes/auth');
const membershipRoutes = require('./routes/membership');
const contactRoutes = require('./routes/contact');
const loanRoutes = require('./routes/loans');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB. Server not started.');
    process.exit(1);
  }
})();

// ✅ Global Middleware
app.use(helmet());
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ✅ CORS Configuration (allow local dev + production frontend)
const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// ✅ Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { message: 'Too many requests. Please try again later.' },
});
app.use('/api/', limiter);

// ✅ Register Routes
app.use('/api/auth', authRoutes);
app.use('/api/membership', membershipRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/dashboard', dashboardRoutes);

// ✅ Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Laika SACCO API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

// ✅ 404 Handl
