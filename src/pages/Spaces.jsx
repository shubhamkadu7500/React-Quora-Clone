import React from 'react'
import '../pagecss/spaces.css'
import Header from '../components/Header'
import { AiOutlinePlusCircle, AiOutlineMail} from 'react-icons/ai'
import { FaRegCompass } from 'react-icons/fa'
import DiscoverSpaces from "../pages/DiscoverSpaces"

const Spaces = () => {
  return (
    <div>
      <Header/>
     <div className="main-container">
      <div className="m-container">
        <div className="f-container">
          <div className="space-info">
            <div className="space-a">
            <h5>Welcome to Spaces!</h5>
            </div>
            <div className="space-b">
            <p>Follow Spaces to explore your interest on Quora.</p>
            </div>
            <div className="space-c">
                <button className='btn'>
                  <AiOutlinePlusCircle className='circle'/>
                  <span>Create a Space</span>
                </button>
             
                <button className='btn1'>
                  <FaRegCompass className='compass'/>
                  <span>Discover Spaces</span>
                </button>
            </div>
          </div>
          <div className="space-d" >
          <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.tribes.tribe_welcome_banner_full.png-26-64d500fd69494b66.png" alt="image" />
          </div>
        </div>


   
        <div className="box1">
            <p>Discover Spaces</p>
          </div>
          <div className="p">
            <span>Spaces you might like</span>
          </div>
          <div className="space-cards">
               <DiscoverSpaces/>
          </div>
        </div>
     

      <div className="r-container">
        <div className="invite">
          <span>Pending Invites</span>
        </div>
        <div className="message">
          <AiOutlineMail className='mail'/>
          <span>No Invites</span>
        </div>
      </div>
     </div>
      
     
    </div>
  )
}

export default Spaces
