const { comparePass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const User = require("../models/user");

class Controller {
  static signIn = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!comparePass(password, user.password)) {
        throw { name: "NOT FOUND" };
      }
      let payload = {
        id: user.id,
      };
      const token = signToken(payload);
      res.status(200).json({ access_token: token });
    } catch (error) {
      next(error);
    }
  };

  static signUp = async (req, res, next) => {
    try {
      console.log(req.body);
      const { name, phoneNumber, email, username, password } = req.body;
      await User.create({ name, phoneNumber, email, username, password });
      res.status(201).json("Success");
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = Controller;
