import { useParams } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import PartnrDisplay from '../components/PartnrDisplay';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function ListPartnrs() {
   const [users, setUsers] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
   const { courseId } = useParams();

   useEffect(() => {
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
         setLoading(false);
      }
      getUsers();
   }, [])
   
      
   const listPartnrs =
      users.map((user) => {
         console.log(user.zid);
         const partnrInfo = {
            zid: user.zid,
            name: user.name,
            year: user.year,
            degree: user.degree,
            photo: user.photo,
            mbti: user.mbti,
            //hours: number
            communication: user.comms,
         };
         return <PartnrDisplay key={user.zid} partnrInfo={partnrInfo} />;
      });

   return (
      <PageTemplate showBottomNav={true} showYellowBg={false}>
      <div className='container items-center justify-center pt-10 lg:px-40 md:px-20 bg-theme-white'>
         <div className='grid grid-cols-2 lg:gap-x-16 md:gap-x-8 gap-y-10'>
            {loading ?
            <p> loading </p>
            : listPartnrs}
         </div>
      </div>
      </PageTemplate>
   )
}

export default ListPartnrs;