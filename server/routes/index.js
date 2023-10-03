const { verifyToken } = require("../util/auth");
const { getPostsController, createPostController } = require("../controllers");

const express = require("express");
const router = express.Router();

router.get("/posts", verifyToken, getPostsController);

router.post("/posts", verifyToken, createPostController);

module.exports = router;
