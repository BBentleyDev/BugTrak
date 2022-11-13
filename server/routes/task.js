const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const { protect } = require("../middleware/authMiddleware");

//Main Routes - simplified for now
router.get("/", protect, taskController.getTasks);
router.post("/", protect, taskController.addTask);
router.delete("/:id", protect, taskController.deleteTask);
router.put("/:id", protect, taskController.toggleProgress);

module.exports = router;