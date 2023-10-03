const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./util/errorHandler");
const { verifyToken } = require("../util/auth");

const app = express();
const port = 3001;

// initialize database
require("./db/initialize");

// middleware
app.use(express.json());
app.use(morgan("tiny"));

// routes
app.use("/posts", verifyToken, require("./routes/posts"));

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
