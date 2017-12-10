import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import { Link, LinkPropTypes } from "./link";

import logo from "../images/allard-logo.svg";
import "./nav.css";

const Nav = ({ links = [] }) => (
  <header className="nav">
    <img className="nav-logo" alt="Heather Allard Designs" src={logo} />
    <ul className="nav-list">
      {links.map(link => <Link key={shortid.generate()} {...link} />)}
    </ul>
  </header>
);

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(LinkPropTypes)).isRequired
};

export default Nav;
