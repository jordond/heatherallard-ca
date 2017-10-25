import React from "react";
import { Router } from "react-static";
import glamorous from "glamorous";
//
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

export default () => (
  <Router>
    <AppStyles>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
);
