import React from 'react'
import '../pagecss/answer.css'
import Header from '../components/Header'
import { GoStar } from 'react-icons/go'
import { VscClose } from 'react-icons/vsc'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { AiOutlineWifi} from 'react-icons/ai'
import { TbPencilOff } from 'react-icons/tb'
import { BiDownvote } from 'react-icons/bi' 
import { BsThreeDots} from 'react-icons/bs'
import { RxCaretDown, RxPencil1 } from  'react-icons/rx'
import {Answers} from '../data/Answers'



const Answer = () => {
  return (
    <div>
      <Header/>
      <div className="answer">
        <div className="answer-content">
          <h6>Questions</h6>
          <div className="answer-box">
            <p>Questions for you</p>
            <span>Answer request</span>
            <span>Drafts</span>
          </div>
        </div>
        
        <div className="answer-main">
          <div className="answer-quest">
            <GoStar className='star'/>
            <span>Questions for you</span>
          </div>
          {Answers.map((e, index) =>(
             <div key={index} className="answerd-one">
             <div  className="questions">
             <p>{e.question}</p>
             <button>
               <VscClose className='vsclose'/>
             </button>
             </div>
             <div className="answerd">
               <span>{e.answers}</span>&nbsp;&middot;&nbsp;
               <p>{e.lastfollowed}</p>
             </div>
             <div className="clicks">
               <div className="click">
                 <button className='btn'>
                   <HiOutlinePencilSquare className='pencilsq'/> 
                   <span className='as'>Answer</span>
                 </button>
                 <button>
                   <AiOutlineWifi className='wifi'/>
                   <span>Follow&nbsp;&middot;&nbsp;{e.follow}</span>
                 </button>
                 <button>
                   <TbPencilOff className='penciloff'/>
                   <span>Pass</span>
                 </button>
               </div>
               <div className="down">
                 <BiDownvote className='down'/>
                 <BsThreeDots className='threedot'/>
               </div>
             </div>
           </div>
          ))}
         
          <div className="more">
            <span>More</span>
            <RxCaretDown className='rxdown'/>
          </div>
          <div className="topics">
            <div className="topic-wrapper">
              <div className="topics-info">
                <span>Add 5 topics you know about</span>
                <p>you&apos;ll get better questions if you add more specific topics.</p>
                <button>Add topics</button>
              </div>
            </div>
            <div className="topic-img">
              <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.static_about_page.light_mode.GatherAroundAQuestion_LM.png-26-a377318c55ce1d10.png" alt="image" />
            </div>
          </div>
        </div>

        <div className="answer-topic">
          <div className="topic-about">
            <span>Topics you know about</span>
            <button>   
              <RxPencil1 className='rxpen'/>
            </button>
          </div>
          <div className="wrap">
          <div className="topic-box">
            <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="" />
            <span>No topics yet</span>
            <p>you &apos;ll get better questons if you add <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; more specific topics.</p>
          </div>
          <button>Add topics</button>
          </div>
          
        </div> 
      </div>
    </div>
  )
}

export default Answer
