import React from "react";

import imgSpeechBubble from "../images/home-speechbubble.png";
import imgNamePlate from "../images/home-nameplate.svg";

import "./home.css";

export default () => (
  <div className="home">
    <div className="nameplate">
      <img className="bubble" src={imgSpeechBubble} alt="Hello!" />
      <img className="logo" src={imgNamePlate} alt="Heather Allard" />
    </div>
    <div className="slogan">
      <p>
        eat. design. adventure. repeat.
        <br />what can I do for you?
      </p>
    </div>
  </div>
);
