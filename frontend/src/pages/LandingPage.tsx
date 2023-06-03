import { useContext, useEffect } from 'react';

import PageTemplate from '../components/PageTemplate';
import CourseFolderList from '../components/LandingPage/CourseFolderList';
import RightSideBar from '../components/LandingPage/RightSideBar';
import CourseInfoList from '../components/LandingPage/CourseInfoList';

import { AppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

import defaultPfp from '../assets/defaultPfp.svg';

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
        {<RightSideBar user={user} />}
      </div>
    </PageTemplate>
  );
};

export default LandingPage;
