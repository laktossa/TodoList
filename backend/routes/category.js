const express = require("express");
const Controller = require("../controllers/category");
const router = express.Router();

router.get("/", Controller.getCategories);
router.post("/", Controller.addCategory);
router.delete("/id", Controller.deleteCategory);

module.exports = router;
