const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { protect } = require("../middleware/authMiddleware");

//User Routes - simplified for now
router.post("/", userController.addUser);
router.post("/login", userController.loginUser);
router.get("/me", protect, userController.getUser);

module.exports = router;