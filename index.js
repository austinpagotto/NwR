const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require("./config/keys")
require("./models/user");
require("./services/passport");

// Connect to mongoose DB
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge:30 *24 * 60 * 60 *1000,
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

// this calls the routes
require("./routes/authRoutes")(app);

// This figures out what port to listen to Heroku will inject this environment variable or for development we use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);
