import { useNavigate } from 'react-router-dom';
import cross from '../assets/cross.svg';

// render column headings (time)
export const showTime = () => {
  let content = [];
  for (let i = 8; i < 24; i++) {
    content.push(
      <div className="bg-theme-white h-7 overflow-hidden">
        {i == 12 ? 12 : i % 12} {i >= 12 ? 'pm' : 'am'}
      </div>
    );
  }
  return content;
};

// render row headings (day of week)
export const weekDays = (numDays: number) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.filter((day) => days.indexOf(day) < numDays).map((day) => <div>{day}</div>);
};

// colour key for displaytime/tute pages
export const ColourKey = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex top-1/3 bg-theme-cream w-fit h-fit px-4 rounded-full shadow-md items-center">
      <div className="flex">
        <div className="flex items-center">
          <div className="relative bg-alt-green rounded-full w-8 h-8 m-4" />
          <p className="text-xs text-center">
            Shared <br /> Preferred
          </p>
        </div>

        <div className="flex items-center">
          <div className="relative bg-alt-blue rounded-full w-8 h-8 m-4" />
          <p className="text-xs text-center">
            Your <br /> Preferred
          </p>
        </div>

        <div className="flex items-center">
          <div className="relative bg-alt-yellow rounded-full w-8 h-8 m-4" />
          <p className="text-xs text-center">
            Their <br /> Preferred
          </p>
        </div>
      </div>

      <button onClick={() => navigate('/users/profile')} className="relative p-4 rounded-full hover:shadow-md m-2">
        <img src={cross} alt="cancel" width="30" />
      </button>
    </div>
  );
};
