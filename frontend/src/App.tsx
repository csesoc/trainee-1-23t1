import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/auth/login' element={<Login/>} />
        <Route path='/admin/auth/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
