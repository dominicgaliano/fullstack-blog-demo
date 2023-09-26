const path = require("path");
const fs = require("fs").promises;

async function getPosts() {
  return JSON.parse(
    await fs.readFile(path.join(__dirname, "../data/posts.json"))
  );
}

module.exports = { getPosts };
