import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
  });

  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, user);
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        First Name:
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Phone:
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
      </label>
      <button
        type="submit"
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
