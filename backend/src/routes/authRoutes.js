const router = require("express").Router();
const authcontroller = require("../controllers/authController");
const authenticateToken = require("../middleware/authenticateToken");

router.post("/register", authcontroller.register)
router.post("/login",  authcontroller.login)


module.exports = router