const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: Object,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    picture: {
      type: String,
      default: "",
    },
    age: {
      type: String,
      default: "",
    },
    eyeColor: {
      type: String,
      default: "",
    },
    name: {
      type: Object,
      default: "",
    },
    company: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
