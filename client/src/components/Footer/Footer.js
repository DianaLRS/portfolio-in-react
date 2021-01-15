import React from 'react';
import "./style.css"
import githubLogo from "../../assets/images/githubLogo.png"
import linkedIn from "../../assets/images/linkedIn.png"
import email from "../../assets/images/email.png";
function Footer(){
  
    return(
        <div className ="footer">
         
            <a target="blank" href="https://github.com/DianaLRS"> <img id="github" src={githubLogo}/> </a> 

         
            <a target="blank" href="https://www.linkedin.com/in/diana-l-ramos-7b06241a9/"  > <img id="linkedIn" src={linkedIn} /></a>

            <a href = "mailto: dlramos194@gmail.comm"> <img src={email} id="email"/></a>
        
         
         
         
        </div>
    )
}



export default Footer;