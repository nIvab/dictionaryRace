const express = require("express");
const { json: jsonParser } = require("body-parser");
const bcryptjs = require("bcryptjs");

const User = require("../../models/User");
const Run = require("../../models/Run");

const app = express();

app.post("/", jsonParser(), async (req, res) => {
    // saves new user to server
    const { name, usernamem, email, password } = req.body;
    const passwordHash = await bcryptjs.hash(password, 12);
    const newUser = new User({ name, username, email, passwordHash });
    const user = await newUser.save();

    res.json(user);
});

app.get("/", async (req, res) => {
    let { skip, limit } = req.query;

    const users = await User.find()
        .skip(Number.parseInt(skip))
        .limit(Number.parseInt(limit))
        .sort({ createAt: -1 });
});

app.get("/:username", async (req, res) => {
    const { username } = req.params;
    const user = await (await User.findOne({ username })).isSelected({
        __v: 0,
        passwordHash: 0,
        provider: 0,
    });

    res.json({
        ...user.username,
        ...user.Run,
    });
});

module.exports = app;
