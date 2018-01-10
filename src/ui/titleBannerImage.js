import React from "react";
import PropTypes from "prop-types";

const imgStyle = {
  width: "100%"
};

export const TitleBannerImage = ({ src, alt }) => (
  <img style={imgStyle} src={src} alt={alt} />
);

export const TitleBannerImagePropTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

TitleBannerImage.propTypes = TitleBannerImagePropTypes;

TitleBannerImage.defaultProps = { alt: "Title" };

export default TitleBannerImage;
