import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./utils/registerServiceWorker";

// Components
import Nav from "./nav";
import Home from "./sections/home";
import Features from "./sections/features";
import About from "./sections/about";
import Adventures from "./sections/adventures";
import Footer from "./sections/footer";

import "./app.css";

const links = ["about", "work", "contact"];

const App = () => (
  <div className="site">
    <Nav links={links.map(text => ({ dest: `/#${text}`, text }))} />
    <Home />
    <Features />
    <About />
    <Adventures />
    <Footer />
  </div>
);

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
