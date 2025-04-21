import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { Dashboard } from './components/Dashboard';
import { DeepfakeAnalysis } from './components/DeepfakeAnalysis'; // Optional - if you already created it

function App() {
  return (
    <Router>
      <div className="bg-gray-950 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/deepfake" element={<DeepfakeAnalysis />} />
          {/* Add more routes for phishing, RDF, etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
