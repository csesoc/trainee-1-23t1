import { useContext, useEffect } from 'react';

import { AppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

import CourseFolderList from '../components/LandingPage/CourseFolderList';
import CourseInfoList from '../components/LandingPage/CourseInfoList';
import RightSideBar from '../components/LandingPage/RightSideBar';
import PageTemplate from '../components/PageTemplate';

const LandingPage = () => {
  const { user, setUser } = useContext(AppContext);
  const { authUid } = useAuth();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (authUid) {
        const docRef = doc(db, 'users', authUid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userDetails = docSnap.data();
          setUser(userDetails);
        }
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <PageTemplate showYellowBg={false}>
      <div className="w-full h-screen flex flex-row max-lg:flex-col max-lg:h-fit max-lg:mb-[92px] max-lg:overflow-x-hidden max-lg:w-max">
        {<CourseFolderList courses={user?.courses} />}
        {<CourseInfoList courses={user?.courses} partners={user?.partners} />}
        {<RightSideBar user={user} id={authUid} />}
      </div>
    </PageTemplate>
  );
};

export default LandingPage;
