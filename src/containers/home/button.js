import React from "react";
import glamorous from "glamorous";

const Button = glamorous.a({
  "& img": {
    transition: ".8s cubic-bezier(0.17, 0.67, 0.52, 0.97)",
    ":hover": {
      transform: "rotate(360deg)"
    }
  }
});

export default ({ url, img, altText = "" }) => (
  <Button href={url} target="_blank" rel="noopener">
    <img src={img} alt={altText} />
  </Button>
);
