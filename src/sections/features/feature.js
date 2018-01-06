import React from "react";
import PropTypes from "prop-types";

export const Feature = ({ icon, title, text }) => (
  <div className="feat">
    <img className="feat-icon" alt={title} src={icon} />
    <span className="feat-title">{title}</span>
    <p className="feat-text">{text}</p>
  </div>
);

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Feature;
