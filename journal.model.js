const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false
  },
  publishedDate: {
    type: Date,
    required: true
  }
},{timestamps: true});

const Journal = mongoose.model("Journal", JournalSchema);

module.exports = Journal;