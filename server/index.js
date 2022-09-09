require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./src/routers/userRouter");

const app = express(),
    port = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
    next();
});
app.use(cors());

app.use("/user", userRouter);

const start = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECT + process.env.DB_NAME, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(port, () => {
            console.log(`Server started on http://${process.env.DOMAIN}:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
