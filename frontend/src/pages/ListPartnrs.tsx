import { useParams } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import PartnrDisplay from '../components/PartnrDisplay';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

function ListPartnrs() {
   const [users, setUsers] = useState<any[]>([]);
   const [curZid, setCurZid] = useState('');
   const [loading, setLoading] = useState(true);
   const { courseId } = useParams();

   const { authUid } = useAuth();

   useEffect(() =>{
      setTimeout(() => {
         setLoading(false);
       }, 1000);
   });

   useEffect(() => {
      getUsers();
   }, []);
   
   const getUsers = async () => {
      const userList: any[] = [];
      let curZid = 0;
      if (authUid) {
         const userRef = doc(db, "users", authUid);
         const userSnap = await getDoc(userRef);
         const userData = userSnap.data();
         if (userData) {
            curZid = userData.zid;
         }
      }
      if (courseId) {
         const courseRef = doc(db, "courses", courseId);
         const courseSnap = await getDoc(courseRef);
         const userIds = courseSnap.data()?.users;
         userIds.forEach(async (id: any) => {
            const userRef = doc(db, "users", id);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();
            if (userData && userData.zid !== curZid) {
               userList.push(userData);
            }
         });
      }
      setUsers(userList);
   }
   
   
   console.log(users);
   const listPartnrs =
   users.map((user) => {
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
         return <PartnrDisplay key={user.zid} partnrInfo={partnrInfo} />
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