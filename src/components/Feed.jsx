import React from 'react'
import '../css/feed.css'
import{ RxPencil1 } from 'react-icons/rx'
import { BsQuestionSquare } from 'react-icons/bs'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import FeedPost from './FeedPost'

const Feed = () => {
  return (
    <div className='feeds'>
    <div className='feed'>
      <div className="feed-content">
        <div className="feed-user">
         <img src="/images/profile.jpg" alt="profile" />
          <input type="text" placeholder="What do you want to ask or share?" />
        </div>
        <div className="feed-sects">
          <div className="feed-sect">
            <BsQuestionSquare size="20px"  color="#636466"/>
            <p>Ask</p>
          </div>
          <div className="vertical-line"></div>
          <div className="feed-sect" >
             <HiOutlinePencilSquare size="20px" color="#636466"/>
             <p>Answer</p>
          </div>
          <div className="vertical-line"></div>
          <div className="feed-sect ">
            <RxPencil1 size="20px" color="#636466"/>
            <p>Post</p>
          </div>
        </div>
      </div>
    </div>
     <FeedPost/>
    </div>
  )
}

export default Feed
