import { useParams } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';
import PartnrDisplay from '../components/PartnrDisplay';
import anon from '../../../anon.png';

function ListPartnrs() {
   const partnrs = new Map();

   partnrs.set('COMP6969', [
      {
         zid: 1234567,
         name: 'Jasmine',
         year: 2,
         degree: 'Computer Science',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
      {
         zid: 2345678,
         name: 'Oliver',
         year: 69,
         degree: 'Computer Science & Aerospace',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
      {
         zid: 3456789,
         name: 'Jeremy',
         year: 2,
         degree: 'Computer Science & Mathematics',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
      {
         zid: 4567890,
         name: 'Nicole',
         year: 2,
         degree: 'Computer Engineering',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
      {
         zid: 5308817,
         name: 'Chloe',
         year: 4,
         degree: 'Computer Science & Media Arts',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
      {
         zid: 5549934,
         name: 'Joshi',
         year: 2,
         degree: 'Computer Science',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
      {
         zid: 5574830,
         name: 'Henry',
         year: 2,
         degree: 'Computer Science',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
   ]);

   partnrs.set('COMP1531', [
      {
         zid: 1234567,
         name: 'Jasmine',
         year: 2,
         degree: 'Computer Science',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
      {
         zid: 2345678,
         name: 'Oliver',
         year: 69,
         degree: 'Computer Science & Aerospace',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      },
   ]);

   partnrs.set('COMP1151', [
      {
         zid: 1234567,
         name: 'Jasmine',
         year: 2,
         degree: 'Computer Science',
         photo: anon,
         desiredMark: 'HD',
         hours: 3,
         communication: 'Discord'
      }
   ]);

   partnrs.set('COMP1521', []);

   const { courseId } = useParams();

   const potentialPartnrs = partnrs.get(courseId);
   const listPartnrs = potentialPartnrs.map((partnr: any) => {
      const partnrInfo = {
         zid: partnr.zid,
         name: partnr.name,
         year: partnr.year,
         degree: partnr.degree,
         photo: partnr.photo,
         desiredMark: partnr.desiredMark,
         hours: partnr.hours,
         communication: partnr.communication
      }

      return <PartnrDisplay key={partnr.zid} partnrInfo={partnrInfo}></PartnrDisplay>
   });

   return (
      <PageTemplate showBottomNav={true}>
      <div className='container items-center justify-center pt-10 lg:px-40 md:px-20 bg-theme-white'>
         <div className='grid grid-cols-2 lg:gap-x-16 md:gap-x-8 gap-y-10'>
            {listPartnrs}
         </div>
      </div>
      </PageTemplate>
   )
}

export default ListPartnrs;