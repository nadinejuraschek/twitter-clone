const   db  = require("../models"),
        jwt = require("jsonwebtoken");

exports.signin = function() {

}

exports.register = async function(req, res, next) {
    try {
        // create user
        let user = await db.User.create(req.body);
        let { id, username, profileImageUrl } = user;

        // create token
        let token = jwt.sign({
            id,
            username,
            profileImageUrl,
        },
        process.env.APP_SECRET
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token,
        });
    } catch (err) {
        if (err.code === 11000) {
            err.message = "Sorry, that username and/or email is already taken.";
        };
        return next({
            status: 400,
            message: err.message,
        });
    };
};