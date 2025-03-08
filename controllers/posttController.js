const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");


const getPosts = asyncHandler(async (req, res) => {
    const post = await Post.find();
    res.status(200).json(post)
})

const getPost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404).send();
        throw new Error("Post not found");
    }
    res.status(200).json(post)
})
 
const createPost = asyncHandler(async (req, res) => {
    const { name, email, phone} = req.body;
    if (!name || !email || !phone) {
        throw new Error("All the fields are mandate!!")
    }
    const newPost = await Post.create({
        name, email, phone, user_id: req.user.id
    }) 
    res.status(201).json(newPost);
})

const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error("Post not found");
    }
    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedPost)
})


const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error("Post not found");
    }
    await Post.deleteOne({_id: req.params.id });
    res.status(200).json(post)

})

module.exports = {getPosts, getPost, createPost, updatePost, deletePost};