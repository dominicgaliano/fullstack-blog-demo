const {
  authenticateUser,
  signToken,
  verifyRefreshToken,
} = require("./util/auth");
const { getUsers } = require("./util/users");
const express = require("express");
const app = express();
const port = 4001;

app.use(express.json());

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // validate input
  if (!username || !password) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Username and password are required.",
    });
  }

  // fetch users from server
  let users;
  try {
    users = await getUsers();
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while authenticating user",
    });
  }

  // authenticate user
  const user = authenticateUser(username, password, users);
  if (!user) {
    return res
      .status(401)
      .json({ error: "Unauthorized", message: "Invalid username or password" });
  }

  // create JWT
  try {
    const accessToken = await signToken(user, "access");
    const refreshToken = await signToken(user, "refresh");
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

app.post("/token", (req, res, next) => {
  try {
    // validate req body
    const { refreshToken } = req.body;
    if (!refreshToken) return res.sendStatus(400);

    // verify refresh token
    // TODO: implement
    req.sendStatus(501);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while refreshing token.",
    });
  }
});

app.listen(port, () => {
  console.log(`Auth server listening on port ${port}`);
});
