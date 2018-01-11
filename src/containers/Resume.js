import React from "react";
import glamorous from "glamorous";
import Viewer from "react-viewer";

import GhostButton from "./home/ghostButton";
import resumeImage from "../images/resume.png";

// "& div": {
//   width: "100%",
//   height: "100%",
//   maxHeight: "100%",
//   margin: "0",
//   padding: "0",
//   backgroundImage: `url(${resumeImage})`,
//   backgroundSize: "100% 100%",
//   backgroundRepeat: "no-repeat"
// }

const StyledResume = glamorous.div({
  fontSize: "20px",
  "& div": {
    "& img": {
      maxWidth: "50vh"
    }
  }
});

export default () => (
  <StyledResume>
    <GhostButton to="/" width="100" hoverColor="fe6c3d" border="0">
      {"< back"}
    </GhostButton>
    <div className="resume-wrapper">
      <Viewer
        visible={"true"}
        images={[{ src: resumeImage }]}
        alt="Heather Allard resume"
      />
    </div>
  </StyledResume>
);
