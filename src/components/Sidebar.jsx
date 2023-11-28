import React from 'react'
import '../css/sidebar.css'
import { BsPlus } from 'react-icons/bs'
import { Space } from '../data/Space'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="sidebar-box">
          <BsPlus size="12px" />
          <p>Create Space</p>
        </div>
        {Space.map((e, index) => (
          <div key={index} className="sidebar-filter">
            <img src={e.img} alt={e.space} />
            <p>{e.space}</p>
          </div>
        ))}
         </div>

        <div className="sidebar-links">
          <div className="sidebar-link">
            <a href="#">About</a>&nbsp;&middot;&nbsp;
            <a href="#">Careers</a>&nbsp;&middot;
          </div>
          <div className="sidebar-link">
            <a href="#">Terms</a>&nbsp;&middot;
            <a href="#">Privacy</a>&nbsp;&middot;
          </div>
          <div className="sidebar-link">
            <a href="#">Acceptable Use</a>&nbsp;&middot;
          </div>
          <div className="sidebar-link">
            <a href="#">Bussiness</a>&nbsp;&middot;
            <a href="#">Press</a>&nbsp;&middot;
          </div>
          <div className="sidebar-link">
            <a href="#">Your Ad Choices</a>&nbsp;&middot;
          </div>
          <div className="sidebar-link">
            <a href="#">Grievance Officer</a>
          </div>
        </div>
     
    </div>
  );
};

export default Sidebar;
