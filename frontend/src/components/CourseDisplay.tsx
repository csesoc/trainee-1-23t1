import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

type Props = {
   courseInfo: {
      courseId: string
      courseDesc: string
      numOfStudents: number
   };
 };

function CourseDisplay({courseInfo}: Props) {
   const navigate = useNavigate();
   const navToCoursePage = () => {
      navigate(`/courses/${courseInfo.courseId}`);
   }

   const { zid } = useParams();

   const addUserToCourse = async () => {
      try {
         if (zid) {
            const userRef = doc(db, 'users', zid.toString());
            await updateDoc(userRef, {
               courses: arrayUnion(courseInfo.courseId)
            });
         }
         const courseRef = doc(db, 'courses', courseInfo.courseId);
         await updateDoc(courseRef, {
            users: arrayUnion(zid)
         });
      } catch (e) {
         alert(e);
      }
      navigate(`/courses/${courseInfo.courseId}/partnrs`);
   }

   return (
      <div className='container flex max-w-3xl min-h-min my-4 rounded-2xl shadow-md cursor-pointer' onClick={navToCoursePage} >
         <div className='flex-auto flex-col w-1/3 text-center bg-theme-red px-15 py-10 rounded-l-2xl'>
            <b className='text-2xl'>{courseInfo.courseId}</b>
            <p>{courseInfo.courseDesc}</p>
         </div>
         <div className='flex-auto w-2/3 text-center bg-theme-white px-15 py-10 rounded-r-2xl'>
            <p>Number of students: {courseInfo.numOfStudents}</p>
            <button 
               className="bg-theme-red hover:bg-red-400 text-white font-bold py-2 px-4 border-b-2 border-red-600 hover:border-red-500 rounded"
               onClick={addUserToCourse}>
               Join
            </button>
         </div>
      </div>
   )
}

CourseDisplay.propTypes = {
   courseId: PropTypes.object
}

export default CourseDisplay;