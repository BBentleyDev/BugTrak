const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

//Main Routes - simplified for now
router.get("/", homeController.getTasks);
router.post("/addTask", homeController.addTask);
router.delete("/:id", homeController.deleteTask);
router.put("/:id", homeController.toggleProgress);

module.exports = router;