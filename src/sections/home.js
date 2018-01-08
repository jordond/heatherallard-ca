import React from "react";
import Typist from "react-typist";

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
      <Typist
        className="typing"
        startDelay={2000}
        cursor={{ hideWhenDone: true }}
      >
        eat.
        <Typist.Backspace count={4} delay={1250} />
        design.
        <Typist.Backspace count={7} delay={1250} />
        adventure.
        <Typist.Backspace count={11} delay={1000} />
        eat. design. adventure. repeat.
      </Typist>
      <p>
        <br />what can I do for you?
      </p>
    </div>
  </div>
);
