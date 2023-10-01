const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const isEmail = require("validator").isEmail;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [isEmail, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 40,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = { User };
