const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "general",
  },
  company: {
    type: String,
    default: "",
  },
  jobLink: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "",
  },
  source: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
