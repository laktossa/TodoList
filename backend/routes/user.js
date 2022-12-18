const express = require("express");
const Controller = require("../controllers/user");
const router = express.Router();

router.post("/signin", Controller.signIn);
router.post("/signup", Controller.signUp);

module.exports = router;
