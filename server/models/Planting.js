const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');


const plantingSchema = new Schema(
  {
    cropType: {
      type: String,
      required: 'You need to pick a vegetable!',
    },
    DTM: {
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
// plantingSchema.virtual('plantingDate').get(function() {
//   return this.harvestDate - DTM ;
// });

const Planting = model('Planting', plantingSchema);

module.exports = Planting;
