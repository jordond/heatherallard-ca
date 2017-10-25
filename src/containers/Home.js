import React from "react";
import { getSiteProps } from "react-static";
import glamorous from "glamorous";

import Buttons from "./home/buttons";

import logoImage from "../images/logo.svg";

const mediaQueries = {
  phone: "@media only screen and (max-width: 400px)",
  desktop: "@media screen and (min-width: 900px)"
};

const HomeContent = glamorous.div({
  "& .content": {
    [mediaQueries.phone]: {
      marginTop: "-2em"
    },
    color: "#202020",
    textAlign: "center",
    "& img": {
      display: "block",
      margin: "auto",
      maxWidth: "40em"
    },
    "& h1": {
      margin: "-0.1em auto",
      paddingBottom: "0.8em",
      textTransform: "uppercase",
      fontSize: "8vw",
      [mediaQueries.desktop]: {
        fontSize: "70px"
      }
    },
    "& p": {
      margin: "-1em auto 1.5em",
      maxWidth: "40em"
    }
  }
});

export default getSiteProps(() => (
  <HomeContent>
    <div className="content loading">
      <img src={logoImage} alt="Heather Allard" />
      <h1>Under Construction</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus
        sed nisi lacinia sollicitudin. Suspendisse hendrerit massa ut hendrerit
        porttitor. Integer vitae ante ac massa tempus maximus in in mauris.
        Nulla a ex erat. Vestibulum vitae euismod tellus. Sed dignissim augue
        est, ac bibendum felis elementum a. Nulla id blandit neque. Nullam non
        enim nec arcu porttitor pharetra. Donec tristique at eros a semper.
      </p>
      <Buttons />
    </div>
  </HomeContent>
));
