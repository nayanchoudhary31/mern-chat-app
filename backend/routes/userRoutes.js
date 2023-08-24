const epxress = require("express");
const { registerUser, authUserLogin } = require("../controller/userController");
const router = epxress.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUserLogin);

module.exports = router;
