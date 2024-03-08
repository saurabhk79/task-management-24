const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs") 

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function(userPassword) {
  return await bcryptjs.compare(userPassword, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;
