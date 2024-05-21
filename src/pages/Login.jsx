import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/userService";

export default function Login({ handleLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await userService.login(
        formData.email,
        formData.password
      );
      handleLogin(userData);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <h2 className="text-center font-bold text-lg mb-4">Login</h2>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
