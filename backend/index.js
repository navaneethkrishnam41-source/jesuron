const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/research', require('./routes/researchRoutes'));
app.use('/api/images', require('./routes/imageRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/presentation', require('./routes/presentationRoutes'));
app.use('/api/translation', require('./routes/translationRoutes'));
app.use('/api/summarization', require('./routes/summarizationRoutes'));
app.use('/api/website', require('./routes/websiteRoutes'));
app.use('/api/resume', require('./routes/resumeRoutes'));
app.use('/api/finance', require('./routes/financeRoutes'));
app.use('/api/travel', require('./routes/travelRoutes'));
app.use('/api/academic', require('./routes/academicRoutes'));
app.use('/api/sports', require('./routes/sportsRoutes'));
app.use('/api/patents', require('./routes/patentRoutes'));
app.use('/api/music', require('./routes/musicRoutes'));
app.use('/api/health', require('./routes/healthRoutes'));
app.use('/api/video', require('./routes/videoRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/discovery', require('./routes/discoveryRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});