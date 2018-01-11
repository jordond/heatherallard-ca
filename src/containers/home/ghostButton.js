import React from "react";
import glamorous from "glamorous";
import { Link } from "react-static";

export default ({ text = "", to, url = "", children }) => {
  const StyledButton = glamorous.div({});
  if (!to && url) {
    return (
      <StyledButton className="ghostButton">
        <a href={url}>{text || children}</a>
      </StyledButton>
    );
  }

  return (
    <StyledButton className="ghostButton">
      <Link to={to}>{text || children}</Link>
    </StyledButton>
  );
};
