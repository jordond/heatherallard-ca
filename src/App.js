import React from "react";
import { Router } from "react-static";
import glamorous from "glamorous";

import Routes from "react-static-routes";
import ReactGA from "react-ga";

import "./app.css";

ReactGA.initialize("UA-108609170-1");

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

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

export default () => (
  <Router onUpdate={logPageView}>
    <AppStyles className="container">
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
);
