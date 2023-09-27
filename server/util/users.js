const path = require("path");
const fs = require("fs").promises;

async function getUsers() {
  return JSON.parse(
    await fs.readFile(path.join(__dirname, "../data/users.json"))
  );
}

async function getUserById(user_id) {
  const users = await getUsers();
  return users.find((user) => user.user_id === user_id);
}

module.exports = { getUsers, getUserById };
