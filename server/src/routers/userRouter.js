const express = require("express");
const { check } = require("express-validator");
const validation = require("../middlewares/validation");
const AuthController = require("../controllers/authController");

const authController = new AuthController();
const router = new express.Router();

router.post(
    "/signup",
    [
        check("username", "Username cannot be empty").notEmpty(),
        check("password", "Password must be more than 6 or 16 characters").isLength({ min: 6, max: 16 }),
    ],
    authController.registration
);

module.exports = router;
