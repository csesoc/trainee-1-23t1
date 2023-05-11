import PropTypes from 'prop-types';

type Props = {
   courseInfo: {
      courseId: string
      courseDesc: string
      numOfStudents: number
   };
 };

function CourseDisplay({courseInfo}: Props) {
   return (
      <div className='container flex max-w-3xl min-h-min my-5 rounded-xl shadow-md'>
         <div className='flex-auto flex-col w-1/3 text-center bg-theme-red px-15 py-10 rounded-l-2xl'>
            <b className='text-2xl'>{courseInfo.courseId}</b>
            <p>{courseInfo.courseDesc}</p>
         </div>
         <div className='flex-auto w-2/3 text-center bg-theme-white px-15 py-10 rounded-r-2xl'>
            <p>Number of students: {courseInfo.numOfStudents}</p>
         </div>
      </div>
   )
}

CourseDisplay.propTypes = {
   courseId: PropTypes.object
}

export default CourseDisplay;