import React from "react";
import "../pagecss/discover.css";
import {Card} from '../data/Card'
const DiscoverSpaces = () => {
  return (
    <>
      {Card.map((e, index) =>(
        <div key={index} className="card-box">
            <div  className="discover-box">
               <img src={e.coverimg} alt={e.coverimg} />
            <div className="space-logo">
               <img src={e.logo} alt={e.logo} />
            </div>
            <div className="name">
               <span> {e.title}</span>
               <p>{e.desc}</p>
               </div>
             </div>
             </div>
          ))}
    </>
   
  );
};

export default DiscoverSpaces;
