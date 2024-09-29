import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch profile data on component load
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/profile`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, [API_URL]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/profile`, userData);
      console.log("Profile updated:", response.data);
      setIsEditing(false); // Turn off edit mode after successful save
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditing}
          className="block w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          disabled={!isEditing}
          className="block w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          disabled={!isEditing}
          className="block w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          disabled={!isEditing}
          className="block w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          disabled={!isEditing}
          className="block w-full p-2 border rounded"
        />
      </div>

      <div className="flex justify-between">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-green-500 text-white rounded"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="p-2 bg-green-500 text-white rounded"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
