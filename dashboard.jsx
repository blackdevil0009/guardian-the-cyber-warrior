import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Eye, Globe, Code2 } from 'lucide-react';

export function Dashboard() {
  const modules = [
    { name: "Deepfake Detection", icon: <Eye size={24} />, path: "/deepfake" },
    { name: "Phishing Checker", icon: <ShieldAlert size={24} />, path: "/phishing" },
    { name: "Dark Web Intel", icon: <Globe size={24} />, path: "/intel" },
    { name: "RDF Quantum Shield", icon: <Code2 size={24} />, path: "/rdf" },
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Guardian Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Link
            to={mod.path}
            key={mod.name}
            className="bg-gray-800 hover:bg-purple-800 transition p-6 rounded-xl shadow-md flex items-center gap-4"
          >
            <div className="text-purple-400">{mod.icon}</div>
            <div className="font-semibold">{mod.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
