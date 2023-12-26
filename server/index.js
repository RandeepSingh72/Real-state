const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/admin/login', async (req, res) => {
  await mongoose.connect(process.env.MONGO_DB_URL)
  const { username, password } = req.body;
  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create a JWT token
    const token = jwt.sign({ username: admin.username, id: admin._id }, process.env.SECRET_KEY, {expiresIn: '6h'});

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Protected route (requires valid JWT)
app.get('/api/admin/data', authenticateToken, (req, res) => {
  // This route is protected, and only accessible with a valid JWT
  res.json({ message: 'Admin data here!' });
});

// Middleware to check if the request has a valid JWT
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})