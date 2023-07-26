const express = require("express");
const router = express.Router();
const ServerController = require("../controller/server.controller");

router.get("/list", ServerController.getList);
router.get("/popular", ServerController.popularList);
router.get("/client", ServerController.getClient);

module.exports = router;
