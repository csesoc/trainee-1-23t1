import { useNavigate } from 'react-router-dom';
import React from 'react';
import PageTemplate from '../components/PageTemplate';
import CourseDisplay from '../components/CourseDisplay';

function CourseSelect() {
   const dummyData = [
      {
         courseId: 'COMP6969',
         courseDesc: 'Rizzing Fundamentals',
         numOfStudents: 100
      },
      {
         courseId: 'COMP1511',
         courseDesc: 'Programming Fundamentals',
         numOfStudents: 100
      },
      {
         courseId: 'COMP1531',
         courseDesc: 'Software Fundamentals',
         numOfStudents: 100
      }
   ]

   const listCourses = dummyData.map((course) => {
      const courseInfo = {
         courseId: course.courseId,
         courseDesc: course.courseDesc,
         numOfStudents: course.numOfStudents
      }
      return <CourseDisplay key={(course.courseId).toString()} courseInfo={courseInfo}></CourseDisplay>
   });


   return (
      <PageTemplate showBottomNav={true}>
         <div className='container flex flex-col justify-center items-center min-h-screen bg-theme-yellow'>
            {listCourses}
         </div>
      </PageTemplate>
   )
}

export default CourseSelect;