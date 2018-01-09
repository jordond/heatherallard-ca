import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./utils/registerServiceWorker";

// Components
import Nav from "./nav";
import Home from "./sections/home";
import Features from "./sections/features";
import Footer from "./sections/footer";

import "./app.css";

const links = ["about", "work", "contact"];

const App = () => (
  <div>
    <Nav links={links.map(text => ({ dest: `/#${text}`, text }))} />
    <Home />
    <Features />
    <Footer />
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
