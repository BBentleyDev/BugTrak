const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Cross domain
app.use(cors());

//Setup Routes For Which The Server Is Listening
app.use("/", homeRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
