import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-500">
        <Link to="/">🛡️ Guardian</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-purple-400 transition">Dashboard</Link>
        <Link to="/deepfake" className="hover:text-purple-400 transition">Deepfake</Link>
        <Link to="/phishing" className="hover:text-purple-400 transition">Phishing</Link>
        <Link to="/intel" className="hover:text-purple-400 transition">Dark Web Intel</Link>
        <Link to="/rdf" className="hover:text-purple-400 transition">Quantum RDF</Link>
        <Link to="/login" className="bg-purple-600 px-3 py-1 rounded hover:bg-purple-700">Login</Link>
      </div>
    </nav>
  );
}
