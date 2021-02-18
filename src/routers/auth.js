const { Router } = require("express");
const { json: jsonParser } = require("body-parser");
const passport = require("passport");

const router = Router();

router.get(
    "/local",
    jsonParser(),
    passport.authenticate("local"),
    async (req, res) => res.json("ok")
);

router.get("/logout", async (req, res) => {
    req.logOut();
    res.redirect("/");
});

module.exports = router;
