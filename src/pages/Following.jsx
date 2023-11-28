import React from 'react'
import '../pagecss/following.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import {Discovers} from "../data/Discovers"

const Following = () => {
  return (
    <div className='following'>
        <Header/>
      <div className='following-content'>
        <div className='following -sidebar'>
          <Sidebar/>
        </div>
        <div className='following-main'>
          <div className="following-feed">
            <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_lightmode.png-26-cc59fbc57541079b.png" alt="image" />
            <p>Build your new following feed</p>
            <span>Follow some spaces to start discovering stories in your feed.</span>
          </div>
          <div className="following-spaces">
            <span>Discover Spaces</span>
            <div className="spaces">
              <p>Spaces you might like</p>
            </div>

            {Discovers.map((e, index) =>(
              <div key={index}className="following-acc">
              <div className="logo">
                <img src={e.logo} alt={e.logo} />
              </div>
              <div className="info">
                <h6>{e.name}</h6>
                <p>{e.followers}</p>
                <span className='text'>{e.desc}</span>
              </div>
            </div>
            ))}
          </div>

        </div>
        <div className="right"></div>
      </div>
    </div>
    
  )
}

export default Following
