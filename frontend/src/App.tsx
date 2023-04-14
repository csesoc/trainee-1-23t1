import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/auth/login' element={<Login/>} />
        <Route path='/admin/auth/register' element={<Register/>} />
        <Route path='/admin/auth/details' element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
