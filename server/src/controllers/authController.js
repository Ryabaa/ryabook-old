const { validationResult } = require("express-validator");
const service = require("../services/authService");

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(203).json({ message: errors.errors[0].msg });
            }
            const result = await service.registration(req.body);
            res.status(201).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: "Registration error" });
        }
    }
    async login(req, res) {
        try {
            const result = await service.login(req.body);
            res.status(201).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: "Login error" });
        }
    }
}

module.exports = authController;
