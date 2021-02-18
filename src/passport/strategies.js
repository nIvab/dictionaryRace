const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

exports.LocalStrategy = new LocalStrategy(
    {
        usernameField: "email",
    },
    async (email, password, done) => {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false);
        }
        if (!bcryptjs.compare(password, user.passwordHash)) {
            return done(null, false);
        }
        done(null, user);
    }
);
