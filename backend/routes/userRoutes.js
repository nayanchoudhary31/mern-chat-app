const epxress = require("express");
const { registerUser } = require("../controller/userController");
const router = epxress.Router();


router.route("/").get();
router.route("/").post(registerUser)

module.exports = router;
