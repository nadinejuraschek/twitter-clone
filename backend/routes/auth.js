const   express         = require("express"),
        router          = express.Router(),
        { register }    = require("../handlers/auth");

router.post("/register", register);

module.exports = router;