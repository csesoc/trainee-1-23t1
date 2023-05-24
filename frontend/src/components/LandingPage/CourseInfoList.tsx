import { useNavigate, Link } from 'react-router-dom';

const temp = [
  {
    course: 'COMP1531',
    partners: 'Ollie', // accepted partners
    tutorials: 'T09A, T13B', // tutorial preferences
  },
  {
    course: 'COMP3821',
    partners: 'Jasmine, Chloe, Nicole',
    tutorials: '',
  },
  {
    course: 'COMP2511',
    partners: '',
    tutorials: 'F11A, F13B',
  },
  {
    course: 'COMP3891',
    partners: '',
    tutorials: '',
  },
];

const CourseInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="w-1/5 float-right mb-[122px] m-10 overflow-y-auto max-lg:w-full max-lg:m-2">
      {temp.map((course) => (
        <div>
          <button className="p-3 w-full mb-4 bg-theme-red" onClick={() => navigate(course.course)}>
            <p className="text-left font-bold">{course.course}</p>

            <div className="flex items-center m-2">
              <input
                disabled
                checked={course.partners.length > 0}
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
                checked={course.tutorials.length > 0}
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
