const express = require("express");
const router = express.Router();
const routerList = require("./list");
const routerCategory = require("./category");
const routerUser = require("./user");
const authentication = require("../middlewares/authentication");

router.use("/users", routerUser);
router.use(authentication);
router.use("/list", routerList);
router.use("/categories", routerCategory);

module.exports = router;
