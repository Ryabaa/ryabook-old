const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");

const registration = async (userData) => {
    const { username, password } = userData;
    const candidate = await User.findOne({ username });
    if (candidate) {
        return { message: "Username already taken" };
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({ value: "USER" });
    const user = new User({ username, password: hashPassword, roles: [userRole.value] });
    await user.save();
    return { message: "User succesfull registered!" };
};

module.exports = { registration };
