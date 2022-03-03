const express = require("express");
const { resetPassword } = require("../controllers/auth");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  register,
  login,
  forgotPassword,
  logout,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword/:resetToken").put(resetPassword);
router.route("/logout").get(protect, logout);
module.exports = router;
