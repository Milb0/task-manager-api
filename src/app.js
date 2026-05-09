const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// .env variables 
dotenv.config();

// database
connectDB();

const app = express();
// parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

app.get('/', (req, res) => {
    res.send('API rah khdam bien!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));