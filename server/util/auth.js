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
        alg: "HS256",
        issuer: "urn:example:issuer",
        audience: "urn:example:audience",
        requiredClaims: ["user_id"],
      });
      console.log("Server authenticated user:", payload.username);
      next();
    } catch (error) {
      console.error("Error:", error);
      return res.sendStatus(403);
    }
  })();
}

async function signToken(user, tokenType) {
  const secret = new TextEncoder().encode(
    tokenType === "access"
      ? process.env.ACCESS_TOKEN_SECRET
      : process.env.REFRESH_TOKEN_SECRET
  );
  const alg = "HS256";

  const expiresIn = tokenType === "access" ? "10m" : "10w";

  try {
    return await new jose.SignJWT({ user_id: user.id })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setAudience("urn:example:audience")
      .setIssuer("urn:example:issuer")
      .setExpirationTime(expiresIn)
      .sign(secret);
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An error occurred while generating JWT");
  }
}

module.exports = { authenticateUser, authenticateToken, signToken };
