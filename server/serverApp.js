const express = require("express");
const app = express();

const User = require("./models/userModel");

app.get("/getUsers", async (req, res) => {
    try {
        const userData = await User.find({}).select("-_id name username email phone id")

        res.status(200).json({
            data: userData
        })

    } catch (err) {
        console.log(err);
    }
})

module.exports = app;