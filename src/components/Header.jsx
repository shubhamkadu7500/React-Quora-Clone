import React, { useState } from 'react';
import '../css/header.css' 
import DropdownMenu from './DropdownMenu';
import 'react-responsive-modal/styles.css';
import { Link} from 'react-router-dom'
import {FaRegListAlt} from 'react-icons/fa'
import {HiOutlinePencilSquare, HiHome, HiOutlineUserGroup, HiOutlineBell} from 'react-icons/hi2'
import { HiOutlineGlobeAlt, HiOutlineSearch} from 'react-icons/hi'
import {IconContext} from 'react-icons'
import QuestionModal from './QuestionModal';




const Header = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [notificationCount, setNotificationCount] = useState(10);

    // Function to handle icon clicks and toggle selected state
    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
        if (icon === 'notifications') {
          setNotificationCount(0); // Reset the notification count to zero when notifications icon is clicked
        }
      };
  return (
    <div className='header'>
    <div className="header-content">
        <div className="header-logo">
            <a><Link to="/Main">
                <img src="/images/logo.png" alt="logo-image" />
            </Link>
            </a>
        </div>

        <div className="header-icons">
            <IconContext.Provider value={{ size: '28px', color: '#636466' }}>
                <div className={`header-icon ${selectedIcon === 'home' ? 'selected' : ''}`} onClick={() => handleIconClick('home')}>
                    <a><Link to="/Main"><HiHome /></Link></a>
                    <span className="icon-name">Home</span>
                </div>
                <div className={`header-icon ${selectedIcon === 'list' ? 'selected' : ''}`} onClick={() => handleIconClick('list')}>
                    <a><Link to="/Following"><FaRegListAlt /></Link></a>
                    <span className="icon-name">Following</span>
                </div>
                <div
                    className={`header-icon ${selectedIcon === 'answer' ? 'selected' : ''}`} onClick={() => handleIconClick('answer')}>
                    <a><Link to="/Answer"><HiOutlinePencilSquare /></Link></a>
                    <span className="icon-name">Answer</span>
                </div>
                <div
                    className={`header-icon ${selectedIcon === 'spaces' ? 'selected' : ''}`}  onClick={() => handleIconClick('spaces')}>
                    <a><Link to="/Spaces"><HiOutlineUserGroup /></Link></a>
                    <span className="icon-name">Spaces</span>
                </div>
                <div className={`header-icon ${selectedIcon === 'notifications' ? 'selected' : ''}`}  onClick={() => handleIconClick('notifications')} >
                    <a><Link to="/Notifications"><HiOutlineBell /> {notificationCount > 0 && <span className="notification-badge">{notificationCount}</span>}</Link></a>
                    <span className="icon-name">Notifications</span>
                </div>
            </IconContext.Provider>
        </div>

        <div className="header-search">
            <HiOutlineSearch size='16px' color='#636466'/>
            <input type="text" placeholder='Search Quora' />
        </div>

        <div className="header-plus">
            <button> <span>Try Quora+</span> </button>
        </div>
           <DropdownMenu/>
        
        <div className="header-icong">
            <HiOutlineGlobeAlt size='26px' color='#636466'/>
        </div>

       <QuestionModal/>

    </div>
  
</div>
  )
}

export default Header
