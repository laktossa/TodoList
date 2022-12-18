const express = require("express");
const router = express.Router();
const routerList = require("./list");
const routerCategory = require("./category");
const routerUser = require("./user");

router.use("/list", routerList);
router.use("/categories", routerCategory);
router.use("/users", routerUser);

module.exports = router;
