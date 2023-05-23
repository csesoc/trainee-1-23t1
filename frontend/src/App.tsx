import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Details from './pages/Details';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { AppContext } from './context/AppContext';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { user, setUser } = useContext(AppContext);
  const { authUid } = useAuth();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (authUid) {
        const docRef = doc(db, 'users', authUid);
        const docSnap = await getDoc(docRef);
        console.log(authUid);
        if (docSnap.exists()) {
          const userDetails = docSnap.data();
          setUser(userDetails);
        }
      }
    };
    fetchUserDetails();
  }, []);

  console.log(user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/admin/auth/login" element={<Login />} />
        <Route path="/admin/auth/register" element={<Register />} />
        <Route path="/admin/auth/details/:zid" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
