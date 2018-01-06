import React from "react";

import { key } from "../../utils/id";
import Feature from "./feature";

import imgMotion from "../../images/feature-motion.png";
import imgDesign from "../../images/feature-design.png";
import imgAdventure from "../../images/feature-adventure.png";

const features = [
  {
    icon: imgMotion,
    title: "motion",
    text:
      "If movement and designs coming to life are what you seek, I'm the artist for you."
  },
  {
    icon: imgDesign,
    title: "design",
    text:
      "I create beautiful and effective designs for any medium for any product."
  },
  {
    icon: imgAdventure,
    title: "adventure",
    text:
      "I love good visual storytelling, and I can help you tell your video story too!"
  }
];

export default () => (
  <div className="features">
    {features.map(feat => <Feature {...key()} {...feat} />)}
  </div>
);
