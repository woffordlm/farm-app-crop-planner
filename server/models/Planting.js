const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');


const plantingSchema = new Schema(
  {
    cropType: {
      type: String,
      required: 'You need to pick a vegetable!',
    },
    dtm: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    harvestDate: {
      type: String,
      required: true,
      }
  },
  {
    toJSON: {
      getters: true
    }
  }
);
plantingSchema.virtual('plantingDate').get(function() {
  return this.harvestDate - dtm ;
});


const Planting = model('Planting', plantingSchema);

module.exports = Planting;
