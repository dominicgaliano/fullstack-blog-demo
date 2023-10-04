require("dotenv").config();

const errorHandler = async (err, req, res, next) => {
  const environment = process.env.NODE_ENV || "development";
  res.status(err.status || 500);

  if (environment === "development") {
    console.log(err);
    return res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
  }

  res.send({
    error: {
      status: err.status || 500,
    },
  });
};

module.exports = errorHandler;
