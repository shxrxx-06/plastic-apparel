const express = require("express");
const { addUser, getUsers } = require("../dbService");
const router = express.Router();

// Signup route
router.post("/signup", (req, res) => {
  const { email, username, firstName, lastName, password, phone } = req.body;

  // Check if the user already exists
  const existingUsers = getUsers();
  const userExists = existingUsers.some((user) => user.email === email);

  if (userExists) {
    return res
      .status(409)
      .json({ success: false, message: "User already exists" });
  }

  // Add the new user
  const newUser = { email, username, firstName, lastName, password, phone };
  addUser(newUser);

  return res.status(201).json({ success: true, user: newUser });
});

// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid email or password" });
  }

  return res.status(200).json({ success: true, user });
});

module.exports = router;
