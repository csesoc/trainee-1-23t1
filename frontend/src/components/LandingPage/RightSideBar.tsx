import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import defaultPfp from '../../assets/defaultPfp.svg';

import { doc, getDocs, updateDoc, collection, DocumentData } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';

import { db } from '../../firebase';

import { Partner, RequestsUserData } from '../../types';

interface Props {
  user: DocumentData | null;
  id: string | null;
}

interface RequestsProp {
  user: DocumentData | null;
  users: any;
  authUid: string | null;
}

const findOrdinalSuffix = (i: number) => {
  const j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + 'st';
  }
  if (j == 2 && k != 12) {
    return i + 'nd';
  }
  if (j == 3 && k != 13) {
    return i + 'rd';
  }
  return i + 'th';
};

const ProfileInfo = ({ user }: DocumentData) => {
  if (!user) {
    return (
      <div className="bg-theme-yellow w-full p-5">
        <p className="text-3xl">Loading</p>
      </div>
    );
  }

  return (
    <div className="bg-theme-yellow w-full p-5">
      <Link to={'my_profile'}>
        <div className="flex flex-row m-1">
          <img src={user.photo} alt="defaultPfp" width="80" className="rounded-full bg-theme-blue" />
          <div className="flex flex-col items-center justify-center w-full font-bold">
            <p className="text-3xl">{user.name}</p>
            <p>{`@${user.handle}`}</p>
          </div>
        </div>
        <div className="text-center m-1">
          <p>{`${findOrdinalSuffix(user.year)} year | ${user.degree}` + (user.MBTI ? `| ${user.MBT}` : '')}</p>
          <p>{user.bio}</p>
        </div>
      </Link>
    </div>
  );
};

const PendingPartners = ({ user, users, authUid }: RequestsProp) => {
  const pendingPartners: Partner[] = user?.pendingInvitations;

  if (!pendingPartners) {
    return <div className="bg-theme-pink flex-grow mt-5 px-4 pb-0 overflow-auto" />;
  }

  const requests = pendingPartners.map((person) => {
    const user = users[person.id];
    return {
      name: user.name,
      id: person.id,
      handle: user.handle,
      zid: user.zid,
      photo: user.photo,
      course: person.course,
    };
  });

  // const onAccept = async (id: string) => {
  //   const updateUserData = async () => {
  //     const userRef = doc(db, 'users', authUid);
  //     await updateDoc(userRef, { pendingInvitations: requests });
  //   };

  //   try {
  //     const index = requests.findIndex((x) => x.id === id);
  //     user?.parters.push({ id: requests[index].id, course: requests[index].course });
  //     requests.splice(index, 1);
  //     updateUserData();
  //   } catch (e) {
  //     alert('you broke something smh ' + e);
  //   }
  // };

  return (
    <div className="bg-theme-pink flex-grow mt-5 px-4 pb-0 overflow-auto">
      {requests.map((request, index) => (
        <div key={index} className="bg-theme-white p-2 my-3 flex flex-row overflow-visible">
          <Link to={`/users/${request.zid}`}>
            <img
              src={request.photo}
              alt="requestPfp"
              width="80"
              className=" rounded-full max-lg:w-[80px] max-sm:w-0 max-xl:w-0"
            />
          </Link>
          <div className="flex flex-col w-1/3 ml-3">
            <Link to={`/users/${request.zid}`}>
              <p className="font-bold text-lg">{request.name}</p>
            </Link>
            <Link to={`/users/${request?.zid}`}>
              <p className=" text-m">{`@${request.handle}`}</p>
            </Link>
            <p className="text-m">{request.course}</p>
          </div>
          <div className="flex flex-row flex-grow ml-3">
            {/* These buttons currently do nothing */}
            <button className="landing-partner-invite-button bg-theme-blue text-theme-white">Accept</button>
            <button className="landing-partner-invite-button bg-theme-red text-theme-white">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const RightSidebar = ({ user, id }: Props) => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, 'users'));
      let fetchedUsers: Record<string, any> = {};
      snapshot.forEach((doc) => {
        fetchedUsers[doc.id] = doc.data();
      });
      setUsers(fetchedUsers);
    };
    fetchData();
  }, []);

  console.log(user);

  return (
    <div className="float-right w-2/5 m-10 ml-0 mb-[122px] flex flex-col max-lg:w-full max-lg:m-2 max-lg:mb[122px]">
      <ProfileInfo user={user} />
      <PendingPartners user={user} users={users} authUid={id} />
    </div>
  );
};

export default RightSidebar;
