const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "This is required"],
  },
  task: {
    type: String,
    required: [true, "This is required"],
  },
  category: {
    type: Object,
    required: [true, "This is required"],
  },
  status: {
    type: Boolean,
    required: [true, "This is required"],
  },
});

const List = mongoose.model("List", listSchema);

module.exports = List;
