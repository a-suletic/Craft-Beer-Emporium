import React from 'react';
import LandingPage from './views/Landing/LandingPage';
import Header from '../src/components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import DetailsPage from './views/Details/DetailsPage';
import ManagementPage from './views/Management/ManagementPage';
import { DETAILS_PAGE, MANAGEMENT_PAGE } from './utils/constants';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== MANAGEMENT_PAGE && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={DETAILS_PAGE} element={<DetailsPage />} />
        <Route path={MANAGEMENT_PAGE} element={<ManagementPage />} />
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
