import { useContext, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppContext } from './context/AppContext';
import { useAuth } from './context/AuthContext';

import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

import Details from './pages/Details';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import CourseSelect from './pages/CourseSelect';
import ListPartnrs from './pages/ListPartnrs';
import DisplayPartner from './pages/display/DisplayPartner';
import SharedSchedule from './pages/display/SharedSchedule';
import SharedTutes from './pages/display/SharedTutes';
import ScheduleSelector from './components/schedulers/ScheduleSelector';
import TuteSelector from './components/schedulers/TuteSelector';
import EditDetails from './pages/EditDetails';
import { CourseList } from './interfaces/courses';

const App = () => {
  const { user, setUser, courseList, setCourseList } = useContext(AppContext);
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

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const fetchCourses: CourseList[] = [];
      const courseSnap = await getDocs(collection(db, 'courses'));
      courseSnap.forEach((doc) => {
        const courseDetails = doc.data();
        const course = {
          code: doc.id,
          desc: courseDetails.desc,
          users: courseDetails.users,
        };
        fetchCourses.push(course);
      });
      setCourseList(fetchCourses);
    };
    fetchCourseDetails();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/auth/login" element={<Login />} />
        <Route path="/admin/auth/register" element={<Register />} />
        <Route path="/admin/auth/details" element={<Details />} />
        <Route path="/admin/auth/details/:zid" element={<Details />} />

        <Route path="/users/profile" element={<DisplayPartner />} />
        <Route path="/profile/details/edit" element={<EditDetails />} />
        <Route path="/profile/tute/edit" element={<TuteSelector />} />
        <Route path="/profile/time/edit" element={<ScheduleSelector />} />
        <Route path="/users/tutes" element={<SharedTutes />} />
        <Route path="/users/schedule" element={<SharedSchedule />} />

        <Route path="/courses/:zid" element={<CourseSelect />} />
        <Route path="/courses/:courseId/partnrs" element={<ListPartnrs />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
