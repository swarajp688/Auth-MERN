const express = require("express");
const UserData = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }
  const userExists = await UserData.findOne({ email });
  if (userExists) {
    return res.status(400).json({
        status: "error",
        message: "User already exists",
    });
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await UserData.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    return res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({
      status: "error",
      message: "Invalid user data",
    });
    throw new Error("Invalid user data");
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await UserData.findOne({ email });
    if(!user) {
      res.status(400).json({
        status: "error",
        message: "user not exist",
      });
      throw new Error("user not exist");
    }else{
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) {
        res.status(400).json({
          status: "error",
          message: "Invalid Email password",
        });
        throw new Error("Invalid Email or password");
      }else{
        res.status(200).json({
          status:'Ok',
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      status:'error',
      message: "Invalid email or password",
      error: error,
    });
  }
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN);
};
module.exports = {
  register,
  login,
};
