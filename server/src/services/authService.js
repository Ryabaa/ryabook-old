const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../../config");

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles,
    };
    return jwt.sign(payload, secret, { expiresIn: "72h" });
};

const registration = async (userData) => {
    const { avatar, username, password, mail } = userData;
    const candidate = await User.findOne({ username });
    if (candidate) {
        return { message: "Username already taken" };
    }

    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({ value: "USER" });
    const user = new User({ avatar: avatar, username: username, password: hashPassword, mail: mail, roles: [userRole.value] });
    await user.save();

    const { id, roles } = user;
    const token = generateAccessToken(id, roles);

    return { token, id };
};

const login = async (userData) => {
    const { username, password } = userData;
    const user = await User.findOne({ username });
    if (!user) {
        return { message: `User ${username} not found` };
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return { message: `Invalid password` };
    }

    const { id, roles } = user;
    const token = generateAccessToken(id, roles);

    return { token, id };
};

module.exports = { registration, login };
