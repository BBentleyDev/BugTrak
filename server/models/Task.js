const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  inProgress: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
