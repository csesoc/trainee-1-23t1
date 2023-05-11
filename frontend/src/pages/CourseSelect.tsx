import { useNavigate } from 'react-router-dom';
import React from 'react';
import PageTemplate from '../components/PageTemplate';

function CourseSelect() {
   return (
      <PageTemplate showBottomNav={true}>
         <div className='container flex justify-center items-center min-h-screen bg-theme-yellow'>
            <div className='container flex max-w-3xl min-h-min rounded-xl shadow-md'>
               <div className='flex-auto flex-col w-1/3 text-center bg-theme-red px-15 py-10 rounded-l-2xl'>
                  <b className='text-2xl'>COMP6969</b>
                  <p>hello</p>
               </div>
               <div className='flex-auto w-2/3 text-center bg-theme-white px-15 py-10 rounded-r-2xl'>
                  hello
               </div>
            </div>
         </div>
      </PageTemplate>
   )
}

export default CourseSelect;