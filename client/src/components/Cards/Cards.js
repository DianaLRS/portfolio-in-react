import React from "react";
import "./style.css"
import {Carousel} from 'react-bootstrap';
import LitWine from"../../assets/images/LitWine.png";
import shop from "../../assets/images/shop.png";
import password from "../../assets/images/password.png";
import noteapp from "../../assets/images/noteapp.png";
import PARTIE from "../../assets/images/PARTIE.png";


function Cards(){
return(
<Carousel id="carousel">
  <Carousel.Item className="arrow">
    <img
      className="d-block w-100"
      src={shop}
      alt="Aesthetica"
    />
    <Carousel.Caption className="text">
      <h3>Aesthetica</h3>
      <p>Aesthetica is a user friendly and interactive app that bridges fashion and community.</p>
      <a target="blank" href="https://secure-ocean-28347.herokuapp.com/">Visit Page</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="arrow">
    <img
      className="d-block w-100"
      src={PARTIE}
      alt="partie-app"
    />

    <Carousel.Caption className="text">
      <h3>PARTIE APP</h3>
      <p>An event-planning REACTJS app made for event planners where they can keep track of their upcoming planned events, track the budget, todos, invoices and RSVPs if needed, all on a clean, clutter free dashboard</p>
      <a target="blank" href="https://powerful-fortress-17827.herokuapp.com/">Visit Page</a>
    </Carousel.Caption>
  </Carousel.Item>

  
  <Carousel.Item className="arrow">
    <img
      className="d-block w-100"
      src={LitWine}
      alt="LitandWine"
    />

    <Carousel.Caption className="text">
      <h3>Lit Wine</h3>
      <p>A Wine and Book pairing app.</p>
      <a target="blank" href="https://blegesse-git.github.io/Project-1/">Visit Page</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="arrow">
    <img
      className="d-block w-100 "
      src={password}
      alt="password-gen"
    />

    <Carousel.Caption className="text">
      <h3>Random Password Generator</h3>
      <p>Simple random password generator.</p>
      <a target="blank" href="https://dianalrs.github.io/Password-Generator/">Visit Page</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="arrow">
    <img
      className="d-block w-100"
      src={noteapp}
      alt="note-taker-app"
    />

    <Carousel.Caption className="text">
      <h3>Note Taker App</h3>
      <p>A simple, and easy-to-use note taking app.</p>
      <a target="blank" href="https://desolate-inlet-44144.herokuapp.com/">Visit Page</a>
    </Carousel.Caption>
  </Carousel.Item>


</Carousel>
)
}

export default Cards;