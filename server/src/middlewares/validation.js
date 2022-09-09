const { check } = require("express-validator");

const validation = () => {
    check("username", "Username cannot be empty").notEmpty();
    check("password", "Password must be more than 6 or 16 characters").isLength({ min: 6, max: 16 });
};

module.exports = validation;
