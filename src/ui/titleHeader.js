import React from "react";
import PropTypes from "prop-types";

import "./titleHeader.css";

export const TitleHeader = ({ text, src }) => (
  <div className="header">
    <img src={src} alt={text.toLowerCase()} />
    <h2 className="text">{text}</h2>
  </div>
);

export const TitleHeaderPropTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

TitleHeader.propTypes = TitleHeaderPropTypes;

export default TitleHeader;
