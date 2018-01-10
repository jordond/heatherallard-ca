import React from "react";

import imgAvatar from "../../images/about-avatar.png";
import "./about.css";

const About = () => (
  <div id="about" className="about">
    <div className="header">
      <div className="avatar">
        <img src={imgAvatar} alt="Heather Allard" />
      </div>
      <div className="header-text">ABOUT</div>
      <div className="header-subtext">
        motion designer, graphic designer, video editor, whatever you need me to
        be!
      </div>
      <div className="divider" />
      <div className="content">
        <div className="title">THE FUN STUFF</div>
        <p>I love new adventures, and will tour just about anything.</p>
        <p>
          I love travelling the world and have visited 16 countries and counting
        </p>
        <p>
          I love cooking and trying every type of food imaginable, but I&apos;m
          still a sucker for good ol&apos; fashioned pizza
        </p>
      </div>
    </div>
    <div className="list" />
  </div>
);

export default About;
