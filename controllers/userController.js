const asyncHandler = require("express-async-handler");
const argon2 = require('argon2');
const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({$or: [{email}, {userName}]}); 
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exist!")
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
        throw new Error("User data is not valid")
        //...
      }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const user = await User.findOne({email});
    // compare password
    if (user) {
        try {
            if (await argon2.verify(user.password, password)) {
              // password match pass access token
              const accessToken = jwt.sign({
                user: {
                    userName: user.userName,
                    email: user.email,
                    id: user.id,
                },
              }, process.env.ACCESS_TOKEN,
            {
                expiresIn: "10m"
            })
              res.status(200).json({accessToken})
              
            } else {
              // password did not match
                res.status(401);
                throw new Error("Password did not match!")
            }
          } catch (err) {
            // internal failure
          }
    }
});

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };