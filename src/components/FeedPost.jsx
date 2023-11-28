import React from 'react'
import '../css/feedpost.css'
import { RiCloseFill } from 'react-icons/ri'
import { BiUpvote,BiDownvote, BiRepost } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { BsThreeDots} from 'react-icons/bs'
import { UserData } from '../data/UserData'

const FeedPost = () => {
  return (

    <>
    {UserData.map((e, index) =>(
        <div key={index} className='feedpost'>
          <div className="feedpost-content">
             <div className="feed-logo">
                <img src={e.feedlogo} alt="" />
             </div>

             <div className="feed-author">
                <div className="author-info">
                    <span>{e.name}</span>&nbsp;&middot;&nbsp;
                    <p>Follow</p>
                    <RiCloseFill className='close'/>
                </div>

              <div className="feed-ans">
                  <p>{e.answeredby}</p>&nbsp;&middot;&nbsp;
                  <p>{e.date}</p>
              </div>
             </div>
          </div>
          
          <div className="feed-middle">
          <div className="feed-question">
              <p>{e.question}</p>
          </div>
          <div className="feed-img">
              <img src={e.feedimg} alt="img" />
          </div>
          </div>

          <div className="feed-widget">
              <div className="feed-like">
                  <BiUpvote className='up'/>
                  <span>Upvote&nbsp;&middot;&nbsp;</span>
                  <span>{e.likes}</span>
                  <BiDownvote className='down'/>
              </div>
              <div className="comment">
                  <FaRegComment className='comm'/>
                  <span>{e.comments}</span>
              </div>
              <div className="repost">
                  <BiRepost className='repost-icon'/>
                  <span>{e.repost}</span>
              </div>
              <BsThreeDots className='threedots'/>
          </div>
      </div>
    ))}
    </>
    
  );
};

export default FeedPost
