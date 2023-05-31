import { useNavigate } from 'react-router-dom';
import calendarIcon from '../assets/calendarIcon.svg';
import profileIcon from '../assets/profileIcon.svg';
import notifIcon from '../assets/notifIcon.svg';

// IDK HOW TO DO THE CHECK FOR NOTIFS TO DISPLAY THE DOT
const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-theme-blue fixed bottom-0 w-full">
      <button 
        className="bottom-navbar-icon"
        onClick={() =>navigate('/')}>
        <img src={profileIcon} alt="profile" width="30" />
      </button>
      <button 
        className="bottom-navbar-icon"
        onClick={() =>navigate('/')}>
        <img src={notifIcon} alt="notif" width="30" />
      </button>
      <button 
        className="bottom-navbar-icon"
        onClick={() =>navigate('/')}>
        <img src={calendarIcon} alt="calendar" width="30" />
      </button>
    </div>
  );
};

export default BottomNav;
