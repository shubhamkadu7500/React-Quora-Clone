import React from 'react'
import '../pagecss/notification.css'
import Header from '../components/Header'
import { HiDotsHorizontal } from 'react-icons/hi'
import {Notifi} from '../data/Notifi'

const Notifications = () => {
  return (
    <div>
      <Header/>
      <div className="notification">
        <div className="notification-sidebar">
          <div className="notification-filter">
            <span>Filters</span>
          </div>
          <div className="notification-all">
            <span>All Notifiactions</span>
          </div>
          <div className="notification-box">
            <span>Stories</span>
          </div>
          <div className="notification-box">
            <span>Questions</span>
          </div>
          <div className="notification-box">
            <span>Spaces</span>
          </div>
          <div className="notification-box">
            <span>People updates</span>
          </div>
         
          <div className="notification-box">
            <span>Upvotes</span>
          </div>
          <div className="notification-box">
            <span>Your content</span>
          </div>
          <div className="notification-box">
            <span>Your profile</span>
          </div>
          <div className="notification-box">
            <span>Announcements</span>
          </div>
          <div className="notification-box">
            <span>Earnings</span>
          </div>
          <div className="notification-box">
            <span>Subscriptions</span>
          </div>
          <div className="notification-box">
            <span>Comments and mentions</span>
          </div>
        </div>

        
        <div className="notification-main">
          <div className="settings">
            <span className='not'>Notifications</span>
            <span>Mark All As Read &nbsp;&middot;&nbsp;Settings</span>
          </div>


          {Notifi.map((e, index)=> (
          <div key={index} className="notification-card">
           <img src={e.img} alt={e.img} />
           <div className="card-notification">
            <p>{e.handle}&nbsp;&middot;&nbsp;Posted in a Space you might like&nbsp;&middot;&nbsp;{e.time}</p>
            <span>{e.notification}</span>
           </div>
           <HiDotsHorizontal className='horizontal'/>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Notifications
