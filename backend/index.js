const   dotenv          = require("dotenv"),
        express         = require("express"),
        cors            = require("cors"),
        errorHandler    = require("./handlers/error"),
        authRoutes      = require("./routes/auth"),
        messagesRoutes  = require("./routes/messages"),
        { loginRequired, ensureCorrectUser } = require("./middleware/auth"),
        app             = express();

dotenv.config();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use(
    "/api/users/:id/messages",
    loginRequired,
    ensureCorrectUser,
    messagesRoutes
);

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT, function() {
    console.log(`Server is listening on PORT ${process.env.PORT}.`);
});