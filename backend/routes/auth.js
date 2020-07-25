const   express         = require("express"),
        router          = express.Router(),
        { register, signin }    = require("../handlers/auth");

router.post("/register", register);
router.post("/signin", signin);

module.exports = router;