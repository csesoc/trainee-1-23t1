import PageTemplate from '../components/PageTemplate';
import CourseFolderList from '../components/LandingPage/CourseFolderList';
import RightSideBar from '../components/LandingPage/RightSideBar';

import defaultPfp from '../assets/defaultPfp.svg';

const LandingPage = () => {
  return (
    <PageTemplate showYellowBg={false}>
      <div className="container max-w-md">
        {<CourseFolderList />}
        {<RightSideBar />}
        <img src={defaultPfp} alt="pfp" width="400" />
      </div>
    </PageTemplate>
  );
};

export default LandingPage;
