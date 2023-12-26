const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      saleType: {
        type: String,
        required: true,
      },
      featured: {
        type: String,
        required: true,
      },
      areaSq: {
        type: String,
        required: true,
      },
      propertyType: {
        type: String,
        required: true,
      },
      neighbourhood: {
        type: String,
        required: true,
      },
      photoLink: {
        type: [[String]],
        required: true,
      },
      beds: {
        type: String,
        required: true,
      },
      bathroom: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;