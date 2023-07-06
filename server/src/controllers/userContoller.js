const service = require("../services/userService");

class userController {
    async getAllUsers(req, res) {
        try {
            const result = await service.getAllUsers();
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async getUser(req, res) {
        try {
            const result = await service.getUser(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async deleteUser(req, res) {
        try {
            const result = await service.deleteUser(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
    async followUser(req, res) {
        try {
            const result = await service.followUser(req.params.id);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: "Error" });
        }
    }
}

module.exports = userController;
