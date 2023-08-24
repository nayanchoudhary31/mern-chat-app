const asyncHandler = require("express-async-handler");
const UserModel = require("../models/UserModel");
const generateToken = require("../config/generateToken");
require("dotenv").config();
const registerUser = asyncHandler(async (req, resp) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    resp.status(400);
    throw new Error("All Fields are Mandatory!!");
  }

  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    resp.status(400);
    throw new Error("User already exists");
  }

  const user = await UserModel.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    resp.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    resp.status(400);
    throw new Error("User not found!");
  }
});

const authUserLogin = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;
  if (!email || !password) {
    resp.status(400);
    throw new Error("All fields are mandatory !");
  }

  const user = await UserModel.findOne({ email });

  if (user && (await user.validatePassword(password))) {
    resp.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    resp.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, authUserLogin };
