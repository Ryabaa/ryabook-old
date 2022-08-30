const db = require("../ext/db");

const schema = new db.Schema({
    login: {
        type: String,
        required: true,
        maxLength: 255,
        minLength: 2,
        trim: true,
    },
});

shema.methods.getLol = () => {
    let lol = this.login;
    return lol.toUpperCase();
};

module.exports = db.model("User", schema);
