const express = require("express");
const router = express.Router();
//const users = require('../../Users');
const User = require("../../models/users.js");

//Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (e) {
    res.status(404).json({ message: "error in getting users" });
  }
});
router.post("/", async (req, res) => {
  const usr = req.body;
  const newUser = new User(usr);
  try {
    await newUser.save();
    res.status(201).json(usr);
  } catch (e) {
    res.status(400).json({ message: "error in saving users" });
  }
  // res.json(users)
});

//Get single user
// router.get('/:id', (req, res) => {
//     let id = parseInt(req.params.id)
//     console.log(id)
//     let result = users.filter((item) => item.id == id)
//     res.json(result[0])
// });

module.exports = router;
