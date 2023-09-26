const path = require("path");
const fs = require("fs").promises;

async function getUsers() {
  return (users = await JSON.parse(
    fs.readFile(path.join(__dirname, "../data/users.json"))
  ));
}

module.exports = { getUsers };
