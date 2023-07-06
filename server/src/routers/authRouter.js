const { check } = require("express-validator");
const express = require("express");
const AuthController = require("../controllers/authController");

const authController = new AuthController();
const router = new express.Router();

router.post(
    "/signup",
    [
        check("username", "Username cannot be empty").notEmpty(),
        check("password", "Password must be more than 6 or 16 characters").isLength({ min: 6, max: 16 }),
        check("password", "Password confirmation does not match password").custom((value, { req }) => {
            if (value === req.body.password_confirm) {
                return true;
            }
        }),
        check("mail", "Mail cannot be empty").notEmpty(),
    ],
    authController.registration
);

router.post(
    "/login",
    [
        check("username", "Username cannot be empty").notEmpty(),
        check("password", "Password must be more than 6 or 16 characters").isLength({ min: 6, max: 16 }),
    ],
    authController.login
);

module.exports = router;
