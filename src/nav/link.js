import React from "react";
import PropTypes from "prop-types";

export const Link = ({ dest, text }) => (
  <li className="nav-link">
    <a href={dest}>{text}</a>
  </li>
);

export const LinkPropTypes = {
  dest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Link.propTypes = LinkPropTypes;

export default Link;
