const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
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
}, 
{
  timestamps: true
});

module.exports = mongoose.model("Task", TaskSchema);
