import { useNavigate } from 'react-router-dom';

import { auth, db } from '../../firebase';

import folder from '../../assets/folder.svg';
import addButton from '../../assets/addButton.svg';

// Need to take info from backend database
const temp = ['COMP3821', 'COMP1531', 'COMP2511'];

// Assuming only handful of courses
// TODO: Implement if course exceeds screen height then shift to another column
const CourseFolderList = () => {
  const navigate = useNavigate();

  let courses = [];

  const user = auth.currentUser;
  try {
    if (user) {
      courses = user.courses;
    }
  } catch (e) {
    alert(e);
  }

  return (
    <div className="w-2/5 flex flex-col float-left mb-[122px] m-10 overflow-auto max-lg:w-full max-lg:flex-row max-lg:m-2 max-lg:justify-center">
      {temp.map((course) => (
        <div>
          <button
            className="w-1/16 rounded-lg m-1 px-3 py-1 hover:bg-theme-pink/[0.8] active:bg-theme-pink"
            onClick={() => navigate(course)}
          >
            <img src={folder} alt="folder" width="90" />
            <span className="flex justify-center">{course}</span>
          </button>
        </div>
      ))}
      <div>
        <button
          className="w-1/16 flex flex-col justify-center rounded-lg mt-3 mx-2 p-3 hover:bg-theme-pink/[0.8] active:bg-theme-pink max-lg:mt-6"
          onClick={() => navigate('courses/select')}
        >
          <img src={addButton} alt="addButton" width="50" className="ml-3" />
          <span className="flex justify-center">New Course</span>
        </button>
      </div>
    </div>
  );
};

export default CourseFolderList;
