import React from "react";
import Container from "../components/Container/Conatiner"
import Row from "../components/Grid/Row"
import Col from "../components/Grid/Col"
import "./About.css"
import about from "../assets/images/about.jpg";

function About(){

    return(
        <div>
<Container>
<Row>
        <Col>
        <img src={about}/>
        </Col>

        <Col>
        <div className="article" id="about">
<p>A determined, hardworking, and dedicated full-stack developer with aspirations to help others break out of the cycle of poverty and improve access to quality education. Being born into an immigrant community and living under the national poverty line showed me the meaning of hard work. My parents role-modeled what it meant to (often literally) shed blood, sweat and tears in order to advance in life.
     This opened my eyes to the hardships of poverty. It also showed me that unconditional support and access to education are two key factors to breaking the cycle of poverty. 
    Education opened my doors to the world, while the support and ecouragement I recieved from my family fueled my motivation to preservere in face of adversity. 
    I had the privelege to develop a passion for travel and education which led me to becoming a travelling teacher. While the skills I learned from my time teaching have become invaluable to me, I realized that in order for me to give others the support and access to education I was gifted with, that I would need to expand further into the digital world. 
 I strive to use my skills in web development to give the same opportunities to people who aspire to break their own cycle of poverty but lack the resources necessary to do it.</p>
 <p> When I'm not travelling, I am likely adding to my vast indoor plant collection, scavenging around town for either a quality cup of coffee or a well-made Whiskey Sour (yes to the egg), or taking in stray animals to the dismay of my family.</p>
 <p> <strong>Currently focused on:</strong> Front-End Development, React.js</p>
  <p> <strong>Experience with:</strong> HTML, CSS, JS, JQuery, MERN Stack, Handlebars, MySQL, OOP</p>
  </div>
  </Col>
  </Row>
  
</Container>

</div>
    )
}




export default About;