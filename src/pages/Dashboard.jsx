import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/submissions`);
        setSubmissions(response.data.submissions);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, [API_URL]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Submission History</h2>
      <ul className="mt-4">
        {submissions.map((submission) => (
          <li key={submission.id} className="mb-4 p-4 bg-white rounded shadow">
            <p>
              <strong>Type:</strong> {submission.type}
            </p>
            <p>
              <strong>Condition:</strong> {submission.condition}
            </p>
            <p>
              <strong>Action:</strong> {submission.action}
            </p>
            <p>
              <strong>Image:</strong>
              <a
                href={submission.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {" "}
                View
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
