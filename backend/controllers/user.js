const { comparePass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const User = require("../models/user");

class Controller {
  static signIn = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = User.find({ username });
      if (!comparePass(password, user.password)) {
        throw { name: "NOT FOUND" };
      }
      let payload = {
        id: user.id,
      };
      const token = signToken(payload);
      res.status(200).json(token);
    } catch (error) {}
  };

  static signUp = async (req, res, next) => {
    try {
      const { name, phoneNumber, email, username, password } = req.body;
      await User.create({ name, phoneNumber, email, username, password });
      res.status(201).json("Success");
    } catch (error) {}
  };
}
module.exports = Controller;
