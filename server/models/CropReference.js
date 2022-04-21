const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');


const cropReferenceSchema = new Schema(
  {
    name: {
      type: String,
      required: 'You need to pick a vegetable!',
    },
    DTM: {
      type: Number,
      required: true
    },
    harvestwindow: {
      type: Number,
      required: true,
      }
  }
);



const cropReference = model('cropReferenceSchema', cropReferenceSchema);

module.exports = cropReference;
