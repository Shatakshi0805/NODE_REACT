const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must have a name"]
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: [true, "User must have an email"],
        unique: true
    },
    phoneNumber: {
        type: Number
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
