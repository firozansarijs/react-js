import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  console.log(props.company);
   
  return (
    
      <div className="card">

        <div className="top">
          <img
            src= {props.brand}
          />
          <button>Save <Bookmark  size={12}/></button>
        </div>
          <div className="center">
          <h4>{props.company}  <span>{props.date}</span></h4>
          <h2>{props.level}</h2>
          <div className="tag">
            <h4>{props.t1}</h4>
            <h4>{props.t2}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h2>{props.sallary}</h2>
            <p>{props.place}</p>
          </div>

          <button className="apply">Apply Now</button>
        </div>

      </div>
  )
}

export default Card