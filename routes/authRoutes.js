const express = require("express");
const {
  logoutController,
  loginController,
  registerController,
} = require("../controllers/authController");

//router object
const router = express.Router();

//routes
//For the REGISTER
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//LOGOUT
router.post("/logot", logoutController);

module.exports = router;
