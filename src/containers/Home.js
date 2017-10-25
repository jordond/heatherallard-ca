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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  minHeight: "100%",
  "& .content": {
    marginTop: "-2em",
    maxWidth: "100%",
    [mediaQueries.desktop]: {
      maxWidth: "50%",
      marginTop: "0"
    },
    color: "white",
    textAlign: "center",
    "& img": {
      display: "block",
      margin: "auto",
      marginBottom: "1em",
      maxWidth: "20em"
    },
    "& h1": {
      margin: "-0.1em auto",
      paddingBottom: "0.8em",
      textTransform: "uppercase",
      [mediaQueries.desktop]: {
        fontSize: "50px"
      },
      [mediaQueries.phone]: {
        fontSize: "30px"
      }
    },
    "& p": {
      margin: "-1em auto 1.5em",
      maxWidth: "20em",
      fontSize: "24px"
    }
  }
});

export default getSiteProps(() => (
  <HomeContent>
    <div className="content loading">
      <img src={logoImage} alt="Heather Allard" />
      <h1>Under Construction</h1>
      <p>
        exciting stuff coming soon!<br />in the mean time, check out some of my
        work
      </p>
      <Buttons />
    </div>
  </HomeContent>
));
