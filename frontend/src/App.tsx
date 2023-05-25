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
      const courseSnap = await getDocs(collection(db, "courses"));
      courseSnap.forEach((doc) => {
        const courseDetails = doc.data();
        const course = {
          code: doc.id,
          desc: courseDetails.desc,
          users: courseDetails.users,
        }
        fetchCourses.push(course);
      });
      setCourseList(fetchCourses);
    }
    fetchCourseDetails();
  }, []);

  console.log(user);
  console.log(courseList)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/admin/auth/login" element={<Login />} />
        <Route path="/admin/auth/register" element={<Register />} />
        <Route path="/admin/auth/details/:zid" element={<Details />} />
        <Route path="/courses/:zid" element={<CourseSelect />} />
        <Route path="/courses/:courseId" element={<ListPartnrs />} />
      </Routes>
    </Router>
  );
};

export default App;
