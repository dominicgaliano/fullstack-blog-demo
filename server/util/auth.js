require("dotenv").config();
const jose = require("jose");
const bcrypt = require("bcrypt");
const User = require("../models/user_model");
const {
  accessTokenConfig,
  ACCESS_TOKEN_EXPIRATION_TIME,
  REFRESH_TOKEN_EXPIRATION_TIME,
} = require("../config");

async function authenticateUser(email, password) {
  const user = await User.findOne({ email: email });

  if (user && (await bcrypt.compare(password, user.hashedPassword))) {
    return user;
  }
}

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);
  (async () => {
    const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET);
    try {
      const { payload, protectedHeader } = await jose.jwtVerify(
        token,
        secret,
        accessTokenConfig
      );
      console.log("Server authenticated user:", payload.user_id);
      req.user_id = payload.user_id;
      next();
    } catch (error) {
      console.error("Error:", error);
      return res.sendStatus(403);
    }
  })();
}

async function verifyRefreshToken(req, res, next) {
  const redisClient = req.redisClient;

  // validate req body
  const refreshToken = req.cookies["refreshToken"];
  if (!refreshToken) return res.sendStatus(400);

  // verify token
  if (!refreshToken) return res.sendStatus(401);
  (async () => {
    const secret = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET);

    try {
      const { payload, protectedHeader } = await jose.jwtVerify(
        refreshToken,
        secret,
        accessTokenConfig
      );

      // verify token is whitelisted
      const storedRefToken = await redisClient.get(payload.user_id.toString());
      if (refreshToken !== storedRefToken) return res.sendStatus(403);

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
  const alg = accessTokenConfig.alg;

  const expiresIn =
    tokenType === "access"
      ? ACCESS_TOKEN_EXPIRATION_TIME
      : REFRESH_TOKEN_EXPIRATION_TIME;

  try {
    return await new jose.SignJWT({ user_id: user._id })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setAudience(accessTokenConfig.audience)
      .setIssuer(accessTokenConfig.issuer)
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
