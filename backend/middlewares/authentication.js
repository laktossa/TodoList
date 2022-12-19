const { verifyToken } = require("../helpers/jwt");
const User = require("../models/user");

const authentication = async (req, res, next) => {
  try {
    if (!req.headers.access_token) {
      throw { name: "NOT AUTHENTICATED" };
    }
    const payload = verifyToken(req.headers.access_token);
    const user = User.findById(payload.id);
    if (!user) {
      throw { name: "NOT FOUND" };
    }
    req.user = {
      userId: payload.id,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
