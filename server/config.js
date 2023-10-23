const cookieConfig = {
  domain: process.env.CLIENT_DOMAIN,
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7 * 10, // 10 weeks
  sameSite: "Strict",
  secure: true,
};

const corsConfig = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

const authCorsConfig = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
  credentials: true,
};

module.exports = { cookieConfig, corsConfig, authCorsConfig };
