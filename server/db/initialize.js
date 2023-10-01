require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("mongodb connected...");
  })
  .catch((err) => {
    console.log(err.message);
  });
