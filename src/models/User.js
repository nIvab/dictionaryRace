const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: String,
    username: { type: String, unique: true },
    avatar: {
        type: String,
        default: "", //TBA
    },
    email: { type: String, unique: true },
    passwordHash: String,
    provider: { type: String, default: "local" },
    runs: [
        {
            words: [String],
            timeTaken: Number,
        },
    ],
});

module.exports = model("User", userSchema);
