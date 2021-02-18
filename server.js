const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./src/models/User");
const { LocalStrategy } = require("./src/passport/strategies");

mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(passport.initialize());
app.use(passport.session());

passport.deserializeUser((user, done) => {
    User.findById(user._id).then((user) => {
        done(null, user);
    });
});

passport.use(LocalStrategy);
app.use(express.static(`${__dirname}/client/build`));
app.use("/api/auth", require("./src/routers/api/auth"));
app.use("/api/users", require("./src/routers/api/users"));

app.use("/auth", require("./src/routers/auth"));

app.use("*", (req, res) => {
    res.sendFile(`${__dirname}/client/build.index.html`);
});

app.listen(process.env.PORT);
