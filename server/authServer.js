require("dotenv").config();
const express = require("express");
const jose = require("jose");
const app = express();
const port = 4001;

app.use(express.json());

app.post("/login", (req, res) => {
  // rudimentary authenticate user
  const { username, password } = req.body;

  if (username !== user.username || password !== user.password) {
    return res
      .status(401)
      .json({ error: "Unauthorized", message: "Invalid username or password" });
  }

  // create JWT
  (async () => {
    const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET);
    const alg = "HS256";

    try {
      const jwt = await new jose.SignJWT({ name: username })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);

      res.status(200).json({ accessToken: jwt });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        error: "Internal Server Error",
        message: "An error occurred while generating the JWT.",
      });
    }
  })();
});

app.listen(port, () => {
  console.log(`Auth server listening on port ${port}`);
});
