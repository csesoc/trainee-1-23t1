import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type Props = {
   partnrInfo: {
      zid: number
      name: string
      year: number
      degree: string
      photo: string;
      desiredMark: string
      //hours: number
      communication: string
   };
};

function PartnrDisplay({partnrInfo}: Props) {

   const navigate = useNavigate();
   const navToPartnrPage = () => {
      navigate(`/partnrs/${partnrInfo.zid}`);
   }

   const yearToString = (year: number) => {
      switch (year) {
         case 1:
            return '1st Year'
         case 2:
            return '2nd Year'
         case 3: 
            return '3rd Year'
         default:
            return `${year}th Year`
      }
   }

   return (
      <div className='flex relative bg-theme-yellow items-center justify-center col-span-1 p-10 rounded-2xl shadow-md hover:shadow-black'>
         <div className='flex basis-1/3 cursor-pointer' onClick={navToPartnrPage}>
            <img className='p-3' src={partnrInfo.photo}/>
         </div>
         <div className='flex flex-col basis-2/3 cursor-pointer p-3'  onClick={navToPartnrPage}>
            <b>{partnrInfo.name}</b>
            <p className='text-sm'>{yearToString(partnrInfo.year)}</p>
            <p className='text-sm'>{partnrInfo.degree}</p>
            <div className='flex justify-between'>
               <p className='text-sm'><b>Desired Grade </b></p>
               <p className='text-sm'>{partnrInfo.desiredMark}</p>
            </div>
            <div className='flex justify-between'>
               <p className='text-sm'><b>Hours per week </b></p>
               {/* <p className='text-sm'>{partnrInfo.hours}</p> */}
            </div>
            <div className='flex justify-between'>
               <p className='text-sm'><b>Preferred Comms </b></p>
               <p className='text-sm'>{partnrInfo.communication}</p>
            </div>
         </div>
      </div>
   )
}

PartnrDisplay.propTypes = {
   partnrInfo: PropTypes.object
}

export default PartnrDisplay;