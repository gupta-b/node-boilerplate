const asyncHandler = require("express-async-handler");
const argon2 = require('argon2');
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        res.status(400);
        throw new error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({$or: [{email}, {userName}]}); 
    if (userAvailable) {
        res.status(400);
        throw new error("User already exist!")
    }
    try {
        const hashPassword = await argon2.hash(password);
        const userdata = {
            userName, email, password: hashPassword
        }
        const newUser = await User.create(userdata); 
        res.status(201).json({_id: newUser.id, email: newUser.email});
      } catch (err) {
        res.status(400);
        throw new error("User data is not valid")
        //...
      }
});

const loginUser = asyncHandler(async (req, res) => {
    const contact = await User.find();
    res.status(200).json(contact)
});

const currentUser = asyncHandler(async (req, res) => {
    const contact = await User.find();
    res.status(200).json(contact)
});

module.exports = { registerUser, loginUser, currentUser };