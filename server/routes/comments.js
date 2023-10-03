// - [ ] POST, PUT, DELETE /posts/:id/comments
const express = require("express");
const router = express.Router();

router.post("/", createPostController);

router.put("/", updatePostByIdController);

router.delete("/", deletePostByIdController);

module.exports = router;
