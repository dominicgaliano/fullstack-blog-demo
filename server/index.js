const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3001;

// initialize database
require("./db/initialize");

// middleware
app.use(express.json());
app.use(morgan("tiny"));

// routes
app.use("/", require("./routes"));

// error handler
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
