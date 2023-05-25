import PageTemplate from '../components/PageTemplate';
import CourseFolderList from '../components/LandingPage/CourseFolderList';
import RightSideBar from '../components/LandingPage/RightSideBar';
import CourseInfoList from '../components/LandingPage/CourseInfoList';

import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';

import defaultPfp from '../assets/defaultPfp.svg';

const LandingPage = () => {
  const { authUid } = useAuth();

  return (
    <PageTemplate showYellowBg={false}>
      <div className="w-full h-screen flex flex-row max-lg:flex-col max-lg:h-fit max-lg:mb-[92px] max-lg:overflow-x-hidden max-lg:w-max">
        {<CourseFolderList />}
        {<CourseInfoList />}
        {<RightSideBar />}
      </div>
    </PageTemplate>
  );
};

export default LandingPage;
