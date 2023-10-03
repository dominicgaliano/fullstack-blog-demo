const errorHandler = async (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
};

module.exports = errorHandler;
