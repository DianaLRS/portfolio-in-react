import React from "react";
import "./style.css"


function Cards(props){
return(
<div className="card bg-dark text-white card-Div">
  <img src="../../assets/images/placeholder.png" className="card-img" alt="placeholder"/>
  <div className="card-img-overlay">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text">{props.link}</p>
  </div>
</div>

)
}

export default Cards;