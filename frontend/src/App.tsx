import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Page404 from "./pages/Page404";
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import CourseSelect from "./pages/CourseSelect";

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
      </Routes>
    </Router>
  );
};

export default App;
