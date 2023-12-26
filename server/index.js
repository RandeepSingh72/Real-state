const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const Property = require('./models/CreateProperty');
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
    const token = jwt.sign({ username: admin.username, id: admin._id }, process.env.SECRET_KEY);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/admin/create-property', async (req, res) => {
  await mongoose.connect(process.env.MONGO_DB_URL)
  const { propertyName, address, saleType, featured, areaSq, propertyType, neighbourhood, photoLink, beds, bathroom, description } = req.body;

  try {
    const property = Property({
      propertyName: propertyName,
      address: address,
      saleType: saleType,
      featured: featured,
      areaSq: areaSq,
      propertyType: propertyType,
      neighbourhood: neighbourhood,
      photoLink: photoLink,
      beds: beds,
      bathroom: bathroom,
      description: description,
    });
    await property.save();
    res.status(201).json({ success: true, message: 'Property created successfully' });
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }

})
app.get('/api/admin/properties', async (req, res) => {
  await mongoose.connect(process.env.MONGO_DB_URL)
  try {
    // Fetch all properties from the database
    const properties = await Property.find({});
    res.json(properties);
    console.log(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/admin/properties/:id', async (req, res) => {
  try {
    const propertyId = req.params.id;
    const deletedProperty = await Property.findByIdAndDelete(propertyId);

    if (!deletedProperty) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    res.status(200).json({ success: true, message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/api/admin/properties/:id', async (req, res) => {
  await mongoose.connect(process.env.MONGO_DB_URL)
  const propertyId = req.params.id;

  try {
    // Find property by ID in the database
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({ success: false, error: 'Property not found' });
    }

    // Send the property details as JSON
    res.json(property);
  } catch (error) {
    console.error('Error fetching property details:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.put('/api/admin/property/:propertyId', async (req, res) => {
  await mongoose.connect(process.env.MONGO_DB_URL)
  const { propertyId } = req.params;
  const updatedPropertyData = req.body;

  try {
    // Find the property by ID and update its details
    const updatedProperty = await Property.findByIdAndUpdate(propertyId, updatedPropertyData, {
      new: true, // Return the updated document
      runValidators: true, // Run validators (e.g., required fields)
    });

    if (!updatedProperty) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }

    res.status(200).json({ success: true, message: 'Property updated successfully', data: updatedProperty });
  } catch (error) {
    console.error('Error updating property:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
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