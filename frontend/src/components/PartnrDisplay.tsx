import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React from 'react';

type Props = {
   partnrInfo: {
      zid: number
      name: string
      year: number
      degree: string
      desiredMark: string
      hours: number
      communication: string
   };
};

function PartnrDisplay({partnrInfo}: Props) {
   const [showDetails, setShowDetails] = React.useState(false);
   const [saved, setSaved] = React.useState(false);

   const navigate = useNavigate();
   const navToPartnrPage = () => {
      navigate(`/partnrs/${partnrInfo.zid}`);
   }

   const toggleDetails = () => {
      setShowDetails(!showDetails);
   }

   const toggleSaved = () => {
      setSaved(!saved);
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
      <>
      {showDetails
         ?  <div className='flex relative bg-theme-yellow items-center justify-center col-span-1 p-10 rounded-2xl shadow-md hover:shadow-black'>
               <div className='flex flex-col cursor-pointer'  onClick={navToPartnrPage}>
                  <p className='text-sm'><b>Desired Grade: </b> {partnrInfo.desiredMark}</p>
                  <p className='text-sm'><b>Hours per week: </b>{partnrInfo.hours}</p>
                  <p className='text-sm'><b>Preferred Comms: </b>{partnrInfo.communication}</p>
               </div>
               <button className='absolute left-5' onClick={toggleDetails}> V </button>
            </div>
         :  <div className='flex relative bg-theme-yellow items-center justify-center col-span-1 p-10 rounded-2xl shadow-md hover:shadow-black'>
               {saved
                  ? <button className='absolute top-5 left-5' onClick={toggleSaved}> [v] </button>
                  : <button className='absolute top-5 left-5' onClick={toggleSaved}> [] </button>
               }
               <div className='flex basis-1/3 cursor-pointer' onClick={navToPartnrPage}>
                  profile pic
               </div>
               <div className='flex flex-col basis-2/3 cursor-pointer'  onClick={navToPartnrPage}>
                  <b>{partnrInfo.name}</b>
                  <p className='text-sm'>{yearToString(partnrInfo.year)}</p>
                  <p className='text-sm'>{partnrInfo.degree}</p>
               </div>
               <button className='absolute right-5' onClick={toggleDetails}> V </button>
            </div>
      }
      </>
   )
}

PartnrDisplay.propTypes = {
   partnrInfo: PropTypes.object
}

export default PartnrDisplay;