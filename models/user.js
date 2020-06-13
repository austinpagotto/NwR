const mongoose = require("mongoose");

// destructuring to create variable Schema from mongoose method
const { Schema } = mongoose;

// create schema for collection
const userSchema = new Schema({
  googleId: String,
  credits: { type:Number,default:0}
});

// create model for users collection with the schema
mongoose.model("users", userSchema);
