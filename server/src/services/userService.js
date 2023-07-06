const User = require("../models/User");

const getAllUsers = async () => {
    const users = await User.find();
    return { users };
};

const getUser = async (id) => {
    const user = await User.findById(id);
    return { user };
};

const deleteUser = async (id) => {
    const user = await User.findById(id);
    if (user.roles.includes("ADMIN")) {
        return { message: "This user is Admin" };
    } else {
        await User.findByIdAndDelete(id);
        return { message: "User deleted" };
    }
};

const followUser = async (id) => {
    const user = await User.findByIdAndUpdate();
    return { user };
};

module.exports = { getAllUsers, getUser, deleteUser, followUser };
