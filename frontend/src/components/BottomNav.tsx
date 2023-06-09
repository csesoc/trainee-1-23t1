import { useNavigate, Link } from 'react-router-dom';

import calendarIcon from '../assets/calendarIcon.svg';
import profileIcon from '../assets/profileIcon.svg';
import notifIcon from '../assets/notifIcon.svg';
import notifDotIcon from '../assets/notifDotIcon.svg';

const temp = []; // notifs

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-theme-blue fixed bottom-0 z-50 w-full">
      <Link to={'/users/profile'} className="bottom-navbar-icon">
        <img src={profileIcon} alt="profile" width="30" />
      </Link>
      <Link to={'/'} className="bottom-navbar-icon">
        <img src={temp.length ? notifDotIcon : notifIcon} alt="notif" width="30" />
      </Link>
      <Link to={'/profile/details/edit'} className="bottom-navbar-icon">
        <img src={calendarIcon} alt="calendar" width="30" />
      </Link>
    </div>
  );
};

export default BottomNav;
