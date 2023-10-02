require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bepzz2s.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("mongodb connected...");
  })
  .catch((err) => {
    console.log(err.message);
  });
