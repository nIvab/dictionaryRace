const { Schema, model } = require("mongoose");

const runSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        run: [String],
        timeTaken: String,
    },
    { timestamps: true }
);

module.exports = model("Run", runSchema);
