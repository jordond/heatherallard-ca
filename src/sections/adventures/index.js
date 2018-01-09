import React from "react";

import { key } from "../../utils/id";

import TitleHeader from "../../ui/titleHeader";

import titleBG from "./adventure-title.png";
import thumbChicago from "./chicago.png";
import thumbGermany from "./franceGermany.png";

const adventures = [
  {
    src: thumbChicago,
    alt: "Chicago",
    url: ""
  },
  {
    src: thumbGermany,
    alt: "France & Germany",
    url: ""
  },
  {
    src: thumbChicago,
    alt: "Denver",
    url: ""
  }
];

const Adventures = () => (
  <div className="adventures">
    <TitleHeader text="Adventure" src={titleBG} />
    <div className="text">
      I have taken my passion for travel and video and combined them to make
      exciting adventure videos. I edit together live footage with good music to
      create a cohesive, fun video memoir of travel and adventures.
    </div>
    <div className="list">
      {adventures.map(({ url, alt, src }, index) => (
        <div className={`adventure num${index}`} {...key()}>
          <a href={url}>
            <img src={src} alt={alt} />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Adventures;
