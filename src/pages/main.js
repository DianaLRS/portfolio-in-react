import React from "react";
import "./Mainstyle.css";
import Conatiner from "../components/Container/Conatiner";

function Main(){

    return(

        <div>
            <Conatiner>
                <div className="article">
                <h1 className="Hello"> Hello, my name is</h1>
                <h1 className ="name">Diana</h1>
                </div>
            </Conatiner>
        </div>
    )

}


export default Main;