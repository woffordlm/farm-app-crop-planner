


const { Schema, model } = require('mongoose');

const cropReferenceSchema = new Schema(
  {
    name: {
      type: String,
    },
    dtm: {
      type: Number,
    },
    harvestwindow: {
      type: Number,
      },
    sowingDates: {
      type: String,
    }

  }
);



const cropReference = model('cropReferenceSchema', cropReferenceSchema);

module.exports = cropReference;
