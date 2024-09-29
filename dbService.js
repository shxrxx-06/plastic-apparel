const fs = require("fs");
const path = require("path");

// Path to db.json
const dbPath = path.join(__dirname, "db.json");

// Read the JSON file (helper function)
const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading db.json:", err);
    return { users: [], submissions: [] }; // Default structure in case of error
  }
};

// Write to the JSON file (helper function)
const writeDB = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing to db.json:", err);
  }
};

// Add a new user to the db.json file
const addUser = (user) => {
  const db = readDB();
  db.users.push(user);
  writeDB(db);
  return user;
};

// Add a new submission to the db.json file
const addSubmission = (submission) => {
  const db = readDB();
  db.submissions.push(submission);
  writeDB(db);
  return submission;
};

// Get all users
const getUsers = () => {
  const db = readDB();
  return db.users;
};

// Get all submissions
const getSubmissions = () => {
  const db = readDB();
  return db.submissions;
};

module.exports = { addUser, addSubmission, getUsers, getSubmissions };
