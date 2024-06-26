import React from "react";
import './Card.css'
function Card({title, imageURL,body}){
    return(
        <div style={{}} className="card-container">

            <div className="image-container">
                <img src={imageURL} alt='' />
            </div>
            
            <div className="card-title">
                <h3>{title}</h3>
            </div>

            <div className="card-body">
               <p>{body}</p> 
            </div>
            
        </div>
        
    )
}

export default Card;