import { useNavigate } from 'react-router-dom';
import calendarIcon from '../assets/calendarIcon.svg';
import profileIcon from '../assets/profileIcon.svg';
import notifIcon from '../assets/notifIcon.svg';

// IDK HOW TO DO THE CHECK FOR NOTIFS TO DISPLAY THE DOT
// IDK HOW TO WORK THESE ROUTES MAN
const BottomNav = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-blue fixed bottom-0 w-full">
            <a href="" className="bottom-navbar-icon"><img src={profileIcon} alt="profile" width="50"/></a>
            <a href="" className="bottom-navbar-icon"><img src={notifIcon} alt="notif" width="50"/></a>
            <a href="" className="bottom-navbar-icon"><img src={calendarIcon} alt="calendar" width="50"/></a>
        </div>
    );
}

export default BottomNav;