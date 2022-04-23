


const { Schema, model } = require('mongoose');

const cropReferenceSchema = new Schema(
  {
    name: {
      type: String,
    },
    DTM: {
      type: Number,
    },
    harvestwindow: {
      type: Number,
      }
  }
);



const cropReference = model('cropReferenceSchema', cropReferenceSchema);

module.exports = cropReference;
