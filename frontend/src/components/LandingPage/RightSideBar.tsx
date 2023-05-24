import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import defaultPfp from '../../assets/defaultPfp.svg';

const temp = {
  name: 'Hayden Smith',
  handle: '@haydensmith',
  gender: 'Male', // optional (maybe doesnt matter)
  year: '3rd',
  degree: 'Mathematics',
  description: 'On that alpha grindset for some HDsss owo',
  requests: [
    {
      pfp: defaultPfp,
      zid: 5123456,
      name: 'Jake Renzella',
      handle: '@jakerenzella',
      course: 'COMP1531', // possibly show shared courses rather than only requested course (few downsides)
    },
    {
      pfp: defaultPfp,
      zid: 5123456,
      name: 'Jake Renzella',
      handle: '@jakerenzella',
      course: 'COMP1531', // possibly show shared courses rather than only requested course (few downsides)
    },
    {
      pfp: defaultPfp,
      zid: 5123456,
      name: 'Jake Renzella',
      handle: '@jakerenzella',
      course: 'COMP1531', // possibly show shared courses rather than only requested course (few downsides)
    },
    {
      pfp: defaultPfp,
      zid: 5123456,
      name: 'Jake Renzella',
      handle: '@jakerenzella',
      course: 'COMP1531', // possibly show shared courses rather than only requested course (few downsides)
    },
    {
      pfp: defaultPfp,
      zid: 5123456,
      name: 'Jake Renzella',
      handle: '@jakerenzella',
      course: 'COMP1531', // possibly show shared courses rather than only requested course (few downsides)
    },
  ],
};

const ProfileInfo = () => {
  return (
    <div className="bg-theme-yellow w-full p-5">
      <Link to={'my_profile'}>
        <div className="flex flex-row m-1">
          <img src={defaultPfp} alt="defaultPfp" width="80" className="rounded-full bg-theme-blue" />
          <div className="flex flex-col items-center justify-center w-full font-bold">
            <p className="text-3xl">{temp.name}</p>
            <p>{temp.handle}</p>
          </div>
        </div>
        <div className="text-center m-1">
          <p>{`${temp.gender} | ${temp.year} year | ${temp.degree}`}</p>
          <p>{temp.description}</p>
        </div>
      </Link>
    </div>
  );
};

const PendingPartners = () => {
  return (
    <div className="bg-theme-pink flex-grow mt-5 px-4 pb-0 overflow-auto">
      {temp.requests.map((request) => (
        <div className="bg-theme-white p-2 my-3 rounded-md flex flex-row overflow-visible">
          <Link to={`/users/${request.zid}`}>
            <img src={request.pfp} alt="requestPfp" width="80" className=" rounded-full max-lg:w-[80px] max-sm:w-0 max-xl:w-0" />
          </Link>
          <div className="flex flex-col w-1/3 ml-3">
            <Link to={`/users/${request.zid}`}>
              <p className="font-bold text-lg">{request.name}</p>
            </Link>
            <Link to={`/users/${request.zid}`}>
              <p className=" text-m">{request.handle}</p>
            </Link>
            <p className="text-m">{request.course}</p>
          </div>
          <div className="flex flex-row flex-grow ml-3">
            <button className="landing-partner-invite-button bg-theme-blue">Accept</button>
            <button className="landing-partner-invite-button bg-theme-red">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="float-right w-2/5 m-10 ml-0 mb-[122px] flex flex-col max-lg:w-full max-lg:m-2 max-lg:mb[122px]">
      <ProfileInfo />
      <PendingPartners />
    </div>
  );
};

export default RightSidebar;
