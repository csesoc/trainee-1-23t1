import { useNavigate } from 'react-router-dom';

import folder from '../../assets/folder.svg';
import addButton from '../../assets/addButton.svg';

// Need to take info from backend database
const temp = ['COMP3821', 'COMP1531', 'COMP2511'];

// Assuming only handful of courses
// TODO: Implement if course exceeds screen height then shift to another column
const CourseFolderList = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 flex flex-col m-10 overflow-auto">
      {temp.map((course) => (
        <div>
          <button
            className="rounded-lg m-1 px-3 py-1 hover:bg-theme-pink/[0.8] active:bg-theme-pink"
            onClick={() => navigate(course)}
          >
            <img src={folder} alt="folder" width="90" />
            <span className="flex justify-center">{course}</span>
          </button>
        </div>
      ))}
      <button
        className="rounded-lg mt-3 py-2 hover:bg-theme-pink/[0.8] active:bg-theme-pink"
        onClick={() => navigate('courses/select')}
      >
        <img src={addButton} alt="addButton" width="50" className="m-auto" />
        <span>New Course</span>
      </button>
    </div>
  );
};

export default CourseFolderList;
