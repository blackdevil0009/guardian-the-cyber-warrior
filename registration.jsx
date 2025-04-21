import React, { useState } from 'react';
import axios from '../api';

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const res = await axios.post('/auth/register', { email, password });
      alert("Registration successful! You can now login.");
    } catch (err) {
      alert("Registration failed: " + err.response?.data?.detail || err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-800 text-white border border-gray-700"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700"
      />
      <button type="submit" className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded">
        Register
      </button>
    </form>
  );
}
