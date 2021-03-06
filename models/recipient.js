const mongoose = require("mongoose");

// destructuring to create variable Schema from mongoose method
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email:String,
    responded:{type:Boolean,default:false}
})

module.exports = recipientSchema;