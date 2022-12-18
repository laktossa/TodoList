const bcrypt = require("bcrypt");

const hashing = (password) => bcrypt.hashSync(password, 10);
const comparePass = (password, hashed) => bcrypt.compareSync(password, hashed);

module.exports = { hashing, comparePass };
