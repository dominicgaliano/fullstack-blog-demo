const path = require("path");
const fs = require("fs").promises;
const User = require("../models/user_model");

async function getUsers() {
  return JSON.parse(
    await fs.readFile(path.join(__dirname, "../data/users.json"))
  );
}

async function createUser(email, hashedPassword) {
  const user = new User({ email, hashedPassword });
  const savedUser = await user.save();
  return savedUser;
}

async function getUserById(user_id) {
  const users = await getUsers();
  return users.find((user) => user.user_id === user_id);
}

module.exports = { getUsers, createUser, getUserById };
