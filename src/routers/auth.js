const { express } = require("express");
const { json: jsonParser } = require("body-parser");
const passport = require("passport");

const app = express();

app.get(
    "/local",
    jsonParser(),
    passport.authenticate("local"),
    async (req, res) => res.json("ok")
);

app.get("/logout", async (req, res) => {
    req.logOut();
    res.redirect("/");
});

module.exports = app;
