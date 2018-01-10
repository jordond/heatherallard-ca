import React from "react";
import PropTypes from "prop-types";

export const CircleImageLink = ({ url, img }) => (
  <a href={url}>
    <img src={img} alt="Heather Allard" />
  </a>
);

export const CircleImageLinkPropTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

CircleImageLink.propTypes = CircleImageLinkPropTypes;

export default CircleImageLink;
