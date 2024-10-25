import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './components/App';
import './styles/tailwind.css';

const container = document.getElementById('root');
const root = createRoot(container!); // Create a root for the container

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
