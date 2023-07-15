import React, { useState, useEffect } from 'react';
import './header.css';
import moment from 'moment/moment';

function CurrentDate() {
  const currentDate = moment(); 
  const formattedDate = currentDate.format('DD MMMM YYYY');
  return (
    <div>
      {formattedDate}
    </div>
  );
}

const Header = () => {

  const [currentTime, setCurrentTime] = useState(moment().format('h:mm A'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss A'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-width header">
      <b className="header-logo"> ChefKart </b>
      <div className="header-right">
        <div className="header-date-time">
          <div className="date absolute-center">
            <i className="fa-solid fa-calendar-days calender-icon"></i>
            <CurrentDate />
          </div>
          <div className="date-time-separator"></div>
          <div className="time absolute-center">
            <i class='bx bxs-watch clock-icon'></i>
            {currentTime}
          </div>
        </div>
          <div className="profile-wrapper">
            {/* Add user profile picture here */}
            <img 
              src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
              alt="User-Profile"
              className="header-profile-image"
             />
            <span className="header-username">User</span>
            <i className='bx bx-chevron-down absolute-center profile-options-icon'></i>
          </div>
      </div>
    </div>
  )
}

export default Header;
