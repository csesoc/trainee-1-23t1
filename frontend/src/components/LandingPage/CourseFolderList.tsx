import { useNavigate } from 'react-router-dom';

import { Course } from '../../types';

import addButton from '../../assets/addButton.svg';
import folder from '../../assets/folder.svg';

interface Props {
  courses: Course[];
}

const CourseFolderList = ({ courses }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-2/5 flex flex-col float-left mb-[122px] m-10 overflow-auto max-lg:w-full max-lg:flex-row max-lg:m-2 max-lg:justify-center">
      {courses &&
        courses.map((course) => (
          <div>
            <button
              className="rounded-lg m-1 pl-5 pr-3 py-1 hover:bg-theme-pink/[0.8] active:bg-theme-pink"
              onClick={() => navigate(course.code)}
            >
              <img src={folder} alt="folder" width="90" />
              <span className="flex justify-center">{course.code}</span>
            </button>
          </div>
        ))}
      <div>
        <button
          className="flex flex-col justify-center rounded-lg mt-3 mx-2 p-3 hover:bg-theme-pink/[0.8] active:bg-theme-pink max-lg:mt-6"
          onClick={() => navigate('courses/select')}
        >
          <img src={addButton} alt="addButton" width="50" className="m-auto" />
          <span className="flex justify-center">New Course</span>
        </button>
      </div>
    </div>
  );
};

export default CourseFolderList;
