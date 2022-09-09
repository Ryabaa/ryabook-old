const mongoose = require("mongoose");
const User = require("../models/User");

const addUser = async function (userData) {
    const user = new User(newUser);
    await user.save();
};

module.exports = { addUser };
