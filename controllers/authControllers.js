const users = require("../models/userModel");

const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.status(200).json({ success: true, user });
  }
  return res
    .status(401)
    .json({ success: false, message: "Invalid email or password" });
};

const signup = (req, res) => {
  const { email, username, firstName, lastName, password, phone } = req.body;
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res
      .status(409)
      .json({ success: false, message: "User already exists" });
  }

  const newUser = {
    id: users.length + 1,
    email,
    username,
    firstName,
    lastName,
    password,
    phone,
  };
  users.push(newUser);
  return res.status(201).json({ success: true, user: newUser });
};

module.exports = { login, signup };
