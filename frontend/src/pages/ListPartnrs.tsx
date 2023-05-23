import { useParams } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import PartnrDisplay from '../components/PartnrDisplay';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function ListPartnrs() {
   const [users, setUsers] = useState<any[]>([]);
   const { courseId } = useParams();

   const getUsers = async () => {
      const userList: any[] = [];
      if (courseId) {
         const courseRef = doc(db, "courses", courseId);
         const courseSnap = await getDoc(courseRef);
         const userIds = courseSnap.data()?.users;
         userIds.forEach(async (id: string) => {
            const userRef = doc(db, "users", id);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();
            userList.push(userData);
         });
      }
      setUsers(userList);
   }

   useEffect(() => {
      getUsers();
   }, []);

   console.log(users)

   // const listPartnrs = users.map((partnr: any) => {
   //    console.log("hi", partnr);
   //    const partnrInfo = {
   //       zid: partnr.zid,
   //       name: partnr.name,
   //       year: partnr.year,
   //       degree: partnr.degree,
   //       photo: partnr.photo,
   //       desiredMark: partnr.desiredMark,
   //       // hours: partnr.hours,
   //       communication: partnr.comms
   //    }
   //    console.log(partnrInfo)
   //    return <PartnrDisplay key={partnr.zid} partnrInfo={partnrInfo} />
   // });

   console.log(users[0]);
   const listPartnrs = <PartnrDisplay key={users[0].zid} partnrInfo={users[0]} />;
  

   return (
      <PageTemplate showBottomNav={true} showYellowBg={false}>
      <div className='container items-center justify-center pt-10 lg:px-40 md:px-20 bg-theme-white'>
         <div className='grid grid-cols-2 lg:gap-x-16 md:gap-x-8 gap-y-10'>
            {listPartnrs}
         </div>
      </div>
      </PageTemplate>
   )
}

export default ListPartnrs;