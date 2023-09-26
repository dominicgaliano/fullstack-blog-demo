require("dotenv").config();
const jose = require("jose");

function authenticateUser(username, password, users) {
  return users.find(
    (user) => user.username === username && user.password === password
  );
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);
  (async () => {
    const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET);

    try {
      const { payload, protectedHeader } = await jose.jwtVerify(token, secret, {
        user: user.username,
      });
      next();
    } catch (error) {
      console.error("Error:", error);
      return res.sendStatus(403);
    }
  })();
}

async function signToken(username, tokenType) {
  const secret = new TextEncoder().encode(
    tokenType === "access"
      ? process.env.ACCESS_TOKEN_SECRET
      : process.env.REFRESH_TOKEN_SECRET
  );
  const alg = "HS256";

  const expiresIn = tokenType === "access" ? "2h" : "10w";

  try {
    return await new jose.SignJWT({ name: username })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setAudience("")
      .setIssuer("")
      .setExpirationTime(expiresIn)
      .sign(secret);
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An error occurred while generating JWT");
  }
}

module.exports = { authenticateUser, authenticateToken, signToken };
