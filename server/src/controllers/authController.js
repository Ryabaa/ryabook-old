const { validationResult } = require("express-validator");
const service = require("../services/authService");

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.send({ message: "Invalid registration data", errors });
            }
            const result = await service.registration(req.body);
            res.status(201).send(result);
        } catch (error) {
            console.log(error);
            res.status(400).send({ error: "Registration error" });
        }
    }
    async login(req, res) {
        try {
        } catch (error) {
            console.log(error);
            res.status(400).send({ error: "Login error" });
        }
    }
    async getUsers(req, res) {
        try {
        } catch (error) {
            console.log(error);
            res.status(400).send({ error: "" });
        }
    }
}

module.exports = authController;
