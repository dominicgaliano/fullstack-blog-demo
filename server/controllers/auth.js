require("dotenv").config();
const { authenticateUser, signToken } = require("../util/auth");
const { createUser, getUserById } = require("../util/users");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const User = require("../models/user_model.js");
const { authSchema } = require("../schemas/validation_schema");

const createUserController = async (req, res, next) => {
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
};

const loginUserController = async (req, res, next) => {
  try {
    const redisClient = req.redisClient;
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
};

const logoutUserController = async (req, res) => {
  // remove token from cache
  try {
    const redisClient = req.redisClient;
    await redisClient.del(req.user_id.toString());
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const refreshTokenController = async (req, res, next) => {
  try {
    const redisClient = req.redisClient;
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
};

module.exports = {
  createUserController,
  loginUserController,
  logoutUserController,
  refreshTokenController,
};
