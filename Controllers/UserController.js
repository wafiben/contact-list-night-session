const User = require("../Models/User");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      res.status(100).json({ msg: "your database is empty" });
    } else {
      res.status(200).json({ users: users });
    }
  } catch (error) {
    res.status(400).json({ msg: "get all users is failed" });
  }
};
const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const searchedUser = await User.findOne({ _id: id });
    if (!searchedUser) {
      return res.status(101).json({ msg: "user not found" });
    } else {
      res.status(200).json({ user: searchedUser });
    }
  } catch (error) {
    res.status(400).json({ msg: "operation is failed" });
  }
};
const addUser = async (req, res) => {
  const userInfo = req.body;
  try {
    const newUser = new User({
      userName: userInfo.userName,
      email: userInfo.email,
      age: userInfo.age,
    });
    const users = await User.find();
    const searchedUser = users.find((elt) => elt.email == userInfo.email);
    if (!searchedUser) {
      await newUser.save();
      res.status(200).json({ msg: "user is sucessfully added", user: newUser });
    } else {
      res.status(201).json({ msg: "user already exist" });
    }
  } catch (error) {
    res.status(400).json({ msg: "add user is failed" });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    const users = await User.find();
    res.status(200).json({ msg: "delete is succesfully done", users: users });
  } catch (error) {
    res.status(400).json({ msg: "delete user is failed" });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const userInfo = req.body;
  try {
    await User.findByIdAndUpdate(id, userInfo);
    const users = await User.find();
    res.status(200).json({ msg: "update user is succesfully", users: users });
  } catch (error) {
    res.status(400).json({ msg: "update user is failed" });
  }
};

module.exports = { getAllUsers, getOneUser, addUser, deleteUser,updateUser };
