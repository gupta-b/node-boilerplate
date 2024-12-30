const express = require("express");
const commentsRouter = express.Router();

commentsRouter.get("/", (req, res) => {
    res.send("posts");
});

module.exports = commentsRouter;