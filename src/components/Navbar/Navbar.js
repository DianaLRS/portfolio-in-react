
import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

function Navbar(){
    return(
<div>
    <nav className="navbar navbar">
      <span className="navbar-brand mb-0 h1 header">Keeping it simple...</span>
    <container>
    <div className="btn-group" role="group" aria-label="Basic example">
  
  <button type="button" className="btn"> 
  <Link to ="/">Home </Link>
    </button>
  
  <button type="button" className="btn">
    <Link to ="/Portfolio">Portfolio</Link>
      </button>
  
  <button type="button" className="btn">
    <Link to="/About">About</Link>
      </button>
</div>
    </container>
    </nav>
</div>
)
}
export default Navbar;