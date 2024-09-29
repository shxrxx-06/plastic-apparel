import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    condition: "",
    action: "",
    image: "",
  });

  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/submissions`, formData);
      console.log("Submission successful:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <label className="block mb-2">
        Type:
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        >
          <option value="plastic">Plastic</option>
          <option value="biodegradable">Biodegradable</option>
          <option value="non-biodegradable">Non-biodegradable</option>
          <option value="food">Food</option>
        </select>
      </label>

      <label className="block mb-2">
        Condition:
        <input
          type="text"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
          placeholder="Enter condition..."
        />
      </label>

      <label className="block mb-2">
        Action:
        <select
          name="action"
          value={formData.action}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        >
          <option value="donate">Donate</option>
          <option value="recycle">Recycle</option>
          <option value="dispose">Dispose</option>
        </select>
      </label>

      <label className="block mb-2">
        Image URL:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
          placeholder="Enter image URL..."
        />
      </label>

      <button
        type="submit"
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default SubmissionForm;
