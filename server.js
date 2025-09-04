require('dotenv').config();
const express = require('express');
const cors = require('cors');            
const db = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express(); 
app.use(express.json());
app.use(cors());

// Health check
app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

// Mount student routes
app.use('/api', studentRoutes);

// Mount course routes
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
