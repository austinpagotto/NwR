const express = require("express");
const mongoose = require("mongoose");
require("./models/user");
require("./services/passport");

// Connect to mongoose DB
mongoose.connect(require("./config/keys").mongoURI);

const app = express();

// this calls the routes
require("./routes/authRoutes")(app);

// This figures out what port to listen to Heroku will inject this environment variable or for development we use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);
