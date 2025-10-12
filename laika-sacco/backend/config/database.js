const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Attempt to connect using your MongoDB URI from .env
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connectDB;
