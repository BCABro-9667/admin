const express = require('express');
const connectDB = require('./config/db'); // Ensure this file exports a function to connect to MongoDB
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middleware/errorMiddleware'); // Middleware for handling errors
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
