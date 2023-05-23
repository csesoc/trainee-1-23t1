import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Details from './pages/Details';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import CourseSelect from './pages/CourseSelect';
import ListPartnrs from './pages/ListPartnrs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='*' element={<Page404 />} />
        <Route path='/admin/auth/login' element={<Login/>} />
        <Route path='/admin/auth/register' element={<Register/>} />
        <Route path='/admin/auth/details' element={<Details/>} />
        <Route path='/courses/:zid' element={<CourseSelect/>} />
        <Route path='/courses/:courseId/partnrs' element={<ListPartnrs />} />
      </Routes>
    </Router>
  );
};

export default App;
