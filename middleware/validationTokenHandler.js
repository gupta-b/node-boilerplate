const asyncHandler = require ("express-async-handler");
const jwt = require("jsonwebtoken");

const validationToken = asyncHandler(async(req, resizeBy, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                throw new Error("User is not Authorize");
            }
            // console.log(decoded.user);
            req.user = decoded.user;
            next();
        })
        if (!token) {
            resizeBy.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
})

module. exports = validationToken;