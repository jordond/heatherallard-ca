import React from "react";
import { Router } from "react-static";
import glamorous from "glamorous";
import FadeIn from "react-fade-in";

import Routes from "react-static-routes";

import "./app.css";

const AppStyles = glamorous.div({
  fontSize: "16px",
  margin: "0",
  padding: "0",
  "& a": {
    textDecoration: "none",
    color: "#a11100"
  },
  "& .content": {
    padding: "1rem"
  }
});

const fadeIn = {
  transition: "opacity 21s",
  opacity: "1"
};

export default () => (
  <Router>
    <FadeIn>
      <AppStyles className="container" style={fadeIn}>
        <div className="content">
          <Routes />
        </div>
      </AppStyles>
    </FadeIn>
  </Router>
);
