import React from 'react';
import LandingPage from './views/LandingPage';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './views/DetailsPage';
import ManagementPage from './views/Management/ManagementPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/management" element={<ManagementPage />} />
      </Routes>
    </Router>
  );
};

export default App;
