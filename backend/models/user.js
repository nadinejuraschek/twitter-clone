const   mongoose    = require("mongoose"),
        bcrypt      = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [ true, "E-mail is required." ],
        unique: true,
    },
    username: {
        type: String,
        required: [ true, "Please enter a username." ],
        unique: true,
        minLength: [ 3, "Username has to be at least 3 characters long." ],
        maxLength: [ 30, "Username can not exceed 30 characters." ],
    },
    password: {
        type: String,
        required: true,
        minLength: [ 6, "Password has to be at least 6 characters long." ],
        maxLength: [ 100, "Password can not exceed 100 characters." ],
    },
    profileImageUrl: {
        type: String,
    },
    messages: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
});

userSchema.pre("save", async function(next) {
    try {
        if (!this.isModified("password")) {
            return next();
        };
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    };
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
    try {
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        return next(err);
    };
};

const User = mongoose.model("User", userSchema);

module.exports = User;