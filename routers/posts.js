const express = require("express");
const { getPosts, getSinglePost, createPost } = require("../controller/postCtrl");
const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/:id", getSinglePost);
postRouter.post("/", createPost);

module.exports = postRouter;