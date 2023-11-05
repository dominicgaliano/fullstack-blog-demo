require("dotenv").config();

const cookieConfig = {
  domain: process.env.CLIENT_DOMAIN,
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7 * 10, // 10 weeks
  sameSite: "Strict",
  secure: true,
};

const accessTokenConfig = {
  alg: "HS256",
  issuer: "urn:example:issuer",
  audience: "urn:example:audience",
  requiredClaims: ["user_id"],
};

const ACCESS_TOKEN_EXPIRATION_TIME = "10w";
const REFRESH_TOKEN_EXPIRATION_TIME = "10m";

module.exports = {
  cookieConfig,
  accessTokenConfig,
  ACCESS_TOKEN_EXPIRATION_TIME,
  REFRESH_TOKEN_EXPIRATION_TIME,
};
