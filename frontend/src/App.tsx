import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/auth/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
