const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./util/errorHandler");
const { verifyToken } = require("./util/auth");
const cors = require("cors");
const { corsConfig } = require("./config");

const app = express();
const port = 3001;

// initialize database
require("./db/initialize");

// middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors(corsConfig));

// routes
app.use("/posts", verifyToken, require("./routes/posts"));

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
