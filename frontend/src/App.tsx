import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const Page404 = React.lazy(() => import('./pages/Page404'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};


export default App;
