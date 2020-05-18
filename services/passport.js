const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

// create mongoose models users
const User = mongoose.model("users");

passport.serializeUser((user,done)=>{
  done(null,user.id);
})
// use passport with google oauth to get and store google credentials for log in
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Query to see if the user exists in our user db only create a new one if it doesnt exist
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
