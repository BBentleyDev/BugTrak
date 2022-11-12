const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv').config()
const connectDB = require("./config/database");
const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");

//Use .env file in config folder
// require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Cross domain
app.use(cors());

//Setup Routes For Which The Server Is Listening
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

//Server Running
app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running, you better catch it!");
});
