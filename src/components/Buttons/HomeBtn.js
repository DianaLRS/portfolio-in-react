import React from "react";
import {Link} from "react-router-dom";

function HomeBtn(){

return(
<div>
<button type="button" className="btn btn-outline-secondary">
<Link to ="/Portfolio" >Explore Portfolio</Link>
</button>
</div>
)
}
 
export default HomeBtn;