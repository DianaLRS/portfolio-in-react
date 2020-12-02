import React from "react";
import "./Mainstyle.css";
import Conatiner from "../components/Container/Conatiner";
import HomeBtn from "../components/Buttons/HomeBtn"
function Main(){

    return(

        <div>
            <Conatiner>
                <div className="article" id="main">
                <h1 className="Hello"> Hello!</h1>
                <h2 className ="name">My name is Diana</h2>
                <p className="intro"> I'm a full-stack developer with a preference for clean, minimalistic, and user-friendly websites</p>

                {/* <HomeBtn/> */}
                </div>

            </Conatiner>
        </div>
    )

}


export default Main;