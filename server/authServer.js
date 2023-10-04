require("dotenv").config();
const errorHandler = require("./util/errorHandler");
const {
  authenticateUser,
  signToken,
  verifyRefreshToken,
  verifyToken,
} = require("./util/auth");
const { createUser, getUserById } = require("./util/users");
const express = require("express");
const redisClient = require("./util/redis");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const morgan = require("morgan");
const User = require("./models/user_model.js");
const { authSchema } = require("./schemas/validation_schema");

const PORT = process.env.AUTH_PORT || 4001;

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

require("./db/initialize.js");
redisClient.connect();

app.use((req, res, next) => {
  req.redisClient = redisClient;
  next();
});

app.post("/users", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // validate input
    await authSchema.validateAsync(req.body);

    // verify email not already used
    const doesExist = await User.findOne({ email: email });
    if (doesExist) throw createError.Conflict(`${email} is already in use`);

    // register user
    const savedUser = await createUser(email, await bcrypt.hash(password, 10));
    res.status(201).send(savedUser);
  } catch (error) {
    next(error);
  }
});

app.post("/login", async (req, res, next) => {
  try {
    // validate input
    const { email, password } = req.body;
    await authSchema.validateAsync(req.body);

    // authenticate user
    const user = await authenticateUser(email, password);
    if (!user) {
      throw createError(401, "Invalid email or password");
    }

    const accessToken = await signToken(user, "access");
    const refreshToken = await signToken(user, "refresh");

    // add refresh token to cache
    await redisClient.set(user.id.toString(), refreshToken);

    res
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    next(error);
  }
});

app.post("/logout", verifyToken, async (req, res) => {
  // remove token from cache
  try {
    await redisClient.del(req.user_id.toString());
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

app.post("/token", verifyRefreshToken, async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const user = await getUserById(user_id);
    if (!user) {
      throw createError("500");
    }

    // send new tokens
    const accessToken = await signToken(user, "access");
    const refreshToken = await signToken(user, "refresh");

    // add refresh token to cache
    await redisClient.set(user.id.toString(), refreshToken);

    res
      .status(200)
      .json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while generating the JWT.",
    });
  }
});

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Auth server listening on PORT ${PORT}`);
});
