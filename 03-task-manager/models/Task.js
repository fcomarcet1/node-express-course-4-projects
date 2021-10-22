"use strict";

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Do not show fields with private information
/* TaskSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  delete obj.__v;
  delete obj.resetPasswordToken;
  delete obj.resetPasswordExpires;

  return obj;
}; */

//TaskSchema.plugin(uniqueValidator, { message: "is already taken." });
module.exports = mongoose.model("Task", TaskSchema);
