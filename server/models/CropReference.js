


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
      },
    sowingDate: {
      type: String,
    }

  }
);



const cropReference = model('cropReferenceSchema', cropReferenceSchema);

module.exports = cropReference;
