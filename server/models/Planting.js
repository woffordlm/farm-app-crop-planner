const { Schema, model } = require('mongoose');

const plantingSchema = new Schema(
  {
    cropType: {
      type: String,
      required: 'You need to pick a vegetable!',
    },
    username: {
      type: String,
      required: true
    },
    harvestDate: {
        type: Date,
        // default: Date.now,
        get: timestamp => dateFormat(timestamp)
      }, 
    desiredYield: {
        type: String,
        required: 'You need to pick a desired unit!',
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Planting = model('Thought', plantingSchema);

module.exports = Planting;
