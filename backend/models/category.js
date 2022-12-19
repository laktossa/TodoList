const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "This is required"],
  },
  name: {
    type: String,
    required: [true, "This is required"],
  },
  color: {
    type: String,
    required: [true, "This is required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
