require("dotenv").config();
const express = require("express");
const jose = require("jose");
const app = express();
const port = 4001;

const user = {
  username: "exampleUser",
  password: "examplePassword",
};

app.use(express.json());

app.post("/login", async (req, res) => {
  // rudimentary authenticate user
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Username and password are required.",
    });
  }

  if (!authenticateUser(username, password)) {
    return res
      .status(401)
      .json({ error: "Unauthorized", message: "Invalid username or password" });
  }

  // create JWT
  try {
    const jwt = await generateJWT(username);
    res.status(200).json({ accessToken: jwt });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while generating the JWT.",
    });
  }
});

app.listen(port, () => {
  console.log(`Auth server listening on port ${port}`);
});

function authenticateUser(username, password) {
  return !(username !== user.username || password !== user.password);
}

async function generateJWT(username) {
  {
    const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET);
    const alg = "HS256";

    try {
      return (jwt = await new jose.SignJWT({ name: username })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret));
    } catch (error) {
      console.error("Error:", error);
      throw new Error("An error occurred while generating JWT");
    }
  }
}
