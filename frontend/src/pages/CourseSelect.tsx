import PageTemplate from '../components/PageTemplate';
import CourseDisplay from '../components/CourseDisplay';

import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';

interface CourseData {
   id: string
   desc: string
   usersInCourse: number[]
}

function CourseSelect() {
   const [docs, setDocs] = useState<CourseData[]>([]);

   useEffect(() => {
      getCourses();
   }, []);
   
   const getCourses = async () => {
      const courseData: CourseData[] = [];
      const coursesRef = await getDocs(collection(db, "courses"));
      coursesRef.forEach((doc) => {
         const course = doc.data();
         const courseInfo = {
            id: doc.id,
            desc: course.desc,
            usersInCourse: course.users
         }
         courseData.push(courseInfo);
      });
      setDocs(courseData);
   }
   
   const listCourses = docs.map((course) => {
      
      const courseInfo = {
         courseId: course.id,
         courseDesc: course.desc,
      }
      return <CourseDisplay key={course.id} courseInfo={courseInfo}/>
   });
   

   return (
      <PageTemplate showBottomNav={true}>
         <div className='container flex flex-col justify-center items-center min-h-screen pt-10 bg-theme-yellow'>
            {listCourses}
         </div>
      </PageTemplate>
   )
}

export default CourseSelect;