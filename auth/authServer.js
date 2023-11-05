require("dotenv").config();
const errorHandler = require("./util/errorHandler");
const express = require("express");
const redisClient = require("./util/redis");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.AUTH_PORT || 4001;

// initialize databases
require("./db/initialize.js");
redisClient.connect();

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use((req, res, next) => {
  req.redisClient = redisClient;
  next();
});

// routes
app.use("/api/", require("./routes/auth"));

app.get("*", (req, res) => {
  res.sendStatus(404);
});

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Auth server listening on PORT ${PORT}`);
});
