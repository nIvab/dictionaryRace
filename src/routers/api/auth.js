const { express } = require("express");
const passport = require("passport");

const app = express();

app.get("/me", async (res, req) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.statusCode(401).json({ message: "Unauthorised" });
    }
});

module.exports = app;
