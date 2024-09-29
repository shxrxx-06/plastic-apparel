const express = require("express");
const { addSubmission, getSubmissions } = require("../dbService");
const router = express.Router();

// Add a new submission
router.post("/", (req, res) => {
  const { type, condition, action, image } = req.body;

  // Create a new submission object
  const newSubmission = {
    id: Date.now(),
    type,
    condition,
    action,
    image,
  };

  // Add the submission to the db.json
  addSubmission(newSubmission);

  return res.status(201).json({ success: true, submission: newSubmission });
});

// Get all submissions
router.get("/", (req, res) => {
  const submissions = getSubmissions();
  return res.status(200).json({ success: true, submissions });
});

module.exports = router;
