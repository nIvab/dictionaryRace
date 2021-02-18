const { Router } = require("express");
const passport = require("passport");

const router = Router();

router.get("/me", async (res, req) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.statusCode(401).json({ message: "Unauthorised" });
    }
});

module.exports = router;
