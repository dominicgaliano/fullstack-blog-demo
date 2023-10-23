const cookieConfig = {
  domain: process.env.CLIENT_URL,
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7 * 10, // 10 weeks
  sameSite: "none",
  secure: true,
};

const corsConfig = {};

const authCorsConfig = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

module.exports = { cookieConfig, corsConfig, authCorsConfig };
