require("dotenv").config();
const jose = require("jose");

function authenticateUser(username, password, users) {
  // TODO: implement actual authentication
  return users.find(
    (user) => user.username === username && user.password === password
  );
}

function verifyToken(req, res, next) {
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
      console.log("Server authenticated user:", payload.user_id);
      next();
    } catch (error) {
      console.error("Error:", error);
      return res.sendStatus(403);
    }
  })();
}

async function verifyRefreshToken(req, res, next) {
  // validate req body
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(400);

  // verify token
  if (!refreshToken) return res.sendStatus(401);
  (async () => {
    const secret = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET);

    try {
      const { payload, protectedHeader } = await jose.jwtVerify(
        refreshToken,
        secret,
        {
          alg: "HS256",
          issuer: "urn:example:issuer",
          audience: "urn:example:audience",
          requiredClaims: ["user_id"],
        }
      );

      // TODO: check db to ensure token not blacklisted
      //       and/or token is whitelisted

      console.log("Server verified refresh token for user:", payload.user_id);
      req.user_id = payload.user_id;
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

module.exports = {
  authenticateUser,
  verifyToken,
  signToken,
  verifyRefreshToken,
};
