const express = require("express");
const app = express();

// Simple get request when landing page is reached
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// This figures out what port to listen to Heroku will inject this environment variable or for development we use 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);
