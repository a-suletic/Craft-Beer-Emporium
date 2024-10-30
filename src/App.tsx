import React from 'react';
import LandingPage from './views/Landing/LandingPage';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import DetailsPage from './views/Details/DetailsPage';
import ManagementPage from './views/Management/ManagementPage';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/management' && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/management" element={<ManagementPage />} />
      </Routes>
    </div>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
