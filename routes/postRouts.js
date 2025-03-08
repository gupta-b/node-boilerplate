const express = require("express");
const validationToken = require("../middleware/validationTokenHandler");
const router = express.Router();

const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/postController')

// router.use(validationToken);
router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPost).delete(deletePost).put(updatePost)

module.exports = router;