const {
  createUserController,
  loginUserController,
  logoutUserController,
  refreshTokenController,
} = require("../controllers/auth");
const { verifyRefreshToken, verifyToken } = require("../util/auth");

const express = require("express");
const router = express.Router();

router.post("/users", [createUserController, loginUserController]);

router.post("/login", loginUserController);

router.post("/logout", verifyToken, logoutUserController);

router.post("/token", verifyRefreshToken, refreshTokenController);

module.exports = router;
