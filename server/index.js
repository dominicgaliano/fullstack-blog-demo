require("dotenv").config();
const path = require("path");

const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./util/errorHandler");
const { verifyToken } = require("./util/auth");
const cors = require("cors");
const { corsConfig } = require("./config");

const app = express();
const port = process.env.SERVER_PORT || 3001;

// initialize database
require("./db/initialize");

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors(corsConfig));

// routes
app.use("/api/posts", verifyToken, require("./routes/posts"));

// static files, required to ensure that react-router works
if (process.env.NODE_ENV === "production") {
  const publicPath = path.join(__dirname, "/public");
  app.use(express.static(publicPath));
  app.use("*", express.static(publicPath));
}

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
