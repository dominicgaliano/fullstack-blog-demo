const cookieConfig = {
  domain: process.env.CLIENT_URL,
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7 * 10, // 10 weeks
  sameSite: "none",
  secure: true,
};

module.exports = { cookieConfig };
