const path = require("path");
const fs = require("fs").promises;

async function getUsers() {
  return JSON.parse(
    await fs.readFile(path.join(__dirname, "../data/users.json"))
  );
}

async function writeUser(username, password) {
  // TODO: add username validation
  // TODO: convert to db call
  let users = await getUsers();

  // get last user id
  const newUser = {
    id: users.slice(-1) + 1 || 1,
    username: username,
    password: password,
  };

  users.push(newUser);
  await fs.writeFile(
    path.join(__dirname, "../data/users.json"),
    JSON.stringify(users)
  );
}

async function getUserById(user_id) {
  const users = await getUsers();
  return users.find((user) => user.user_id === user_id);
}

module.exports = { getUsers, writeUser, getUserById };
