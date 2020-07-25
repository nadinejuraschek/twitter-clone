const   db  = require("../models"),
        jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next) {
    try {
        // find user
        let user = await db.User.findOne({
            email: req.body.email,
        });
        let { id, username, profileImageUrl } = user;
        let isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
            let token = jwt.sign({
                id,
                username,
                profileImageUrl,
            }, process.env.APP_SECRET);
            return res.status(200).json({
                id,
                username,
                profileImageUrl,
                token,
            });
        } else {
            return next({
                status: 400,
                message: "Invalid e-mail or password.",
            });
        };
    } catch (err) {
        return next({
            status: 400,
            message: "Invalid e-mail or password.",
        });
    };
};

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
            err.message = "Sorry, username and/or email is already taken.";
        };
        return next({
            status: 400,
            message: err.message,
        });
    };
};