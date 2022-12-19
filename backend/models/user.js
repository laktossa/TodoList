const mongoose = require("mongoose");
const { hashing } = require("../helpers/bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "This is required"],
  },
  email: {
    type: String,
    required: [true, "This is required"],
  },
  username: {
    type: String,
    required: [true, "This is required"],
  },
  password: {
    type: String,
    required: [true, "This is required"],
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  user.password = hashing(user.password);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
