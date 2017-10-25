import React from "react";
import glamorous from "glamorous";

import Button from "./button";

import vimeoImage from "../../images/Vimeo.png";
import behanceImage from "../../images/Behance.png";

const Buttons = glamorous.ul({
  listStyleType: "none",
  "& li": {
    display: "inline-block",
    paddingRight: "1em"
  }
});

const buttons = [
  {
    url: "https://vimeo.com/heatherallard",
    img: vimeoImage,
    altText: "Vimeo"
  },
  {
    url: "https://behance.net/hallard",
    img: behanceImage,
    altText: "Behance"
  }
];

export default () => (
  <Buttons>
    {buttons.map(x => (
      <li key={x.url}>
        <Button {...x} />
      </li>
    ))}
  </Buttons>
);
