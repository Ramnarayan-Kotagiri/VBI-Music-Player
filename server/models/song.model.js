const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    trim: true,
  },
  duration: {
    type: Number,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Song", songSchema);