import React, { useEffect } from "react";
import Zoom from "@mui/material/Zoom";

const UiZoom = ({ showIn = true, children, timeout = 1000, delay = 500 }) => {
  return (
    <Zoom in={showIn} timeout={timeout} style={{ transitionDelay: delay }}>
      {children}
    </Zoom>
  );
};

export default UiZoom;
