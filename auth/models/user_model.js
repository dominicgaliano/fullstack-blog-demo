const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const isEmail = require("validator").isEmail;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [isEmail, "Please fill a valid email address"],
    },
    hashedPassword: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
