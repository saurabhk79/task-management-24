const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")

const registerUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ email: userData.email });

    if (existingUser) throw new Error("User already exists!!");

    const user = new User(userData);

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(userData.password, salt);
    user.password = hashedPassword;

    await user.save();

    return user._id;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (userData) => {
  try {
    const { email, password } = userData;

    const user = await User.findOne({ email });

    const isMatch = user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid Credential!!");

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);

    if (!user) throw new Error("User not Found!!");

    return {token, userId : user._id}
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, loginUser };
