import { useContext, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppContext } from './context/AppContext';
import { useAuth } from './context/AuthContext';

import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

import Details from './pages/Details';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import DisplayPartner from './pages/display/DisplayPartner';
import SharedSchedule from './pages/display/SharedSchedule';
import SharedTutes from './pages/display/SharedTutes';
import ScheduleSelector from './pages/schedulers/ScheduleSelector';
import TuteSelector from './pages/schedulers/TuteSelector';
import EditDetails from './pages/EditDetails';

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
        <Route path="/users/profile" element={<DisplayPartner />}/>
        <Route path="/profile/details/edit" element={<EditDetails />} />
        <Route path="/profile/tute/edit" element={<TuteSelector />} />
        <Route path="/profile/time/edit" element={<ScheduleSelector />} />
        <Route path="/users/tutes" element={<SharedTutes />} />
        <Route path="/users/schedule" element={<SharedSchedule />} />
        <Route path="/admin/auth/details/:zid" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
