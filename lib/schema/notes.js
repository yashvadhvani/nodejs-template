const mongoose = require('mongoose');

const { Schema } = mongoose;

const notesSchema = new Schema({
  title: { type: String, required: true },
  email: { type: String, required: true },
  value: { type: String, required: true },
  properties: { type: Object, required: true }
},
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  });

const notes = mongoose.model('notes', notesSchema);

module.exports = notes;