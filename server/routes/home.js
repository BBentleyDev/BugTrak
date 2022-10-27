const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main Routes - simplified for now
router.get("/", homeController.getHome);
router.post("/addTask", homeController.addTask);

module.exports = router;