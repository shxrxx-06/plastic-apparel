const submissions = require("../models/submissionModel");

const addSubmission = (req, res) => {
  const { type, condition, action, image } = req.body;
  const newSubmission = {
    id: submissions.length + 1,
    type,
    condition,
    action,
    image,
  };

  submissions.push(newSubmission);
  return res.status(201).json({ success: true, submission: newSubmission });
};

const getSubmissions = (req, res) => {
  return res.status(200).json({ success: true, submissions });
};

module.exports = { addSubmission, getSubmissions };
