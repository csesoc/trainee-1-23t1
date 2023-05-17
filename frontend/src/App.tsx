import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Details from './pages/Details';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/auth/login" element={<Login />} />
        <Route path="/admin/auth/register" element={<Register />} />
        <Route path="/admin/auth/details" element={<Details />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
