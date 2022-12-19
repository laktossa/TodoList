const express = require("express");
const Controller = require("../controllers/list");
const router = express.Router();

router.get("/", Controller.getList);
router.post("/", Controller.addList);
router.patch("/", Controller.changeStatus);
router.delete("/id", Controller.deleteList);

module.exports = router;
