import React from "react";
import glamorous from "glamorous";
import { Link } from "react-static";

export default ({
  text = "",
  to,
  url = "",
  border = 2,
  width = 200,
  color = "#fff",
  hoverColor = "#fff",
  children
}) => {
  const StyledButton = glamorous.div({
    "& a": {
      color,
      width,
      display: "inline-block",
      padding: "8px",
      border: `${border}px solid ${color}`,
      borderRadius: "5px",
      textAlign: "center",
      outline: "none",
      transition: "border-color 0.3s ease-out, color 0.3s ease-out",
      ":hover": {
        transition: "border-color 0.4s ease-in, color 0.4s ease-in",
        borderColor: hoverColor,
        color: hoverColor
      }
    }
  });
  if (!to && url) {
    return (
      <StyledButton>
        <a href={url}>{text || children}</a>
      </StyledButton>
    );
  }

  return (
    <StyledButton>
      <Link to={to}>{text || children}</Link>
    </StyledButton>
  );
};
