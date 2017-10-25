import React from "react";
import glamorous from "glamorous";

const Button = glamorous.a({});

export default ({ url, img, altText = "" }) => (
  <Button href={url} target="_blank" rel="noopener">
    <img src={img} alt={altText} />
  </Button>
);
