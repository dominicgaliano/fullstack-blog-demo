const path = require("path");
const fs = require("fs").promises;
const User = require("../models/user_model");

async function createUser(email, hashedPassword) {
  const user = new User({ email, hashedPassword });
  const savedUser = await user.save();
  return savedUser;
}

async function getUserById(user_id) {
  const user = User.findOne({ _id: user_id });
  return user;
}

module.exports = { createUser, getUserById };
