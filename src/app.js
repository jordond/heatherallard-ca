import React from "react";

import Nav from "./nav";
import Home from "./sections/home";

import "./app.css";

const links = ["about", "work", "contact"];

const App = () => (
  <div>
    <Nav links={links.map(text => ({ dest: `/#${text}`, text }))} />
    <Home />
  </div>
);

export default App;
