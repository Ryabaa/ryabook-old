const express = require("express");
const UserController = require("../controllers/userContoller");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const userController = new UserController();
const router = new express.Router();

router.get("/all", authMiddleware, userController.getAllUsers);
router.put("/follow", authMiddleware, userController.followUser);
router.delete("/delete/:id", roleMiddleware(["ADMIN"]), userController.deleteUser);
router.get("/:id", authMiddleware, userController.getUser);

module.exports = router;
