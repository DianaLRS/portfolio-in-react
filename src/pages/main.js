import React from "react";
import "./Mainstyle.css";
import Conatiner from "../components/Container/Conatiner";
import HomeBtn from "../components/Buttons/HomeBtn"
function Main(){

    return(

        <div>
            <Conatiner>
                <div className="article" id="main">
                <h1 className="Hello"> Hello, my name is</h1>
                <h1 className ="name">Diana</h1>

                <HomeBtn/>
                </div>

            </Conatiner>
        </div>
    )

}


export default Main;