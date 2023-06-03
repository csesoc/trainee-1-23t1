import { useNavigate, Link } from 'react-router-dom';
import { Course, Partner } from '../../types';

interface Props {
  courses: Course[];
  partners: Partner[];
}

const hasPartners = (code: string, partners: Partner[]) => {
  return !!partners.find((p) => p.course === code);
};

const hasSelection = (classes: string[]) => {
  return classes.length > 0;
};

const CourseInfo = ({ courses, partners }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-1/5 float-right mb-[122px] m-10 overflow-y-auto max-lg:w-full max-lg:m-2">
      {courses?.map((course) => (
        <div>
          <button className="p-3 w-full mb-4 bg-theme-red" onClick={() => navigate(course.code)}>
            <p className="text-left font-bold">{course.code}</p>

            <div className="flex items-center m-2">
              <input
                disabled
                checked={hasPartners(course.code, partners)}
                id="disabled-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-theme-blue bg-gray-100 border-gray-300 rounded"
              />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm font-medium">
                Found Partner(s)
              </label>
            </div>

            <div className="flex items-center m-2">
              <input
                disabled
                checked={hasSelection(course.classes)}
                id="disabled-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-theme-blue bg-gray-100 border-gray-300 rounded"
              />
              <label htmlFor="disabled-checkbox" className="ml-2 text-sm font-medium">
                Set Tutorial Preferences
              </label>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CourseInfo;
