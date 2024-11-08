const express = require("express");
require("dotenv").config();
const app = express();
const { mongoose } = require("mongoose");

//database
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected"));
