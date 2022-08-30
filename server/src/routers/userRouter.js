const express = require("express");

const userRouter = new express.Router();

userRouter.post("/succes", async (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("succes");
});

module.exports = userRouter;
