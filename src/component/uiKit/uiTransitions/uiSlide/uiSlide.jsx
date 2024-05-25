import React, { useEffect } from "react";
import Slide from "@mui/material/Slide";

const UiSlide = ({ showIn = true, children, timeout = 1000, delay = 0 }) => {
  return (
    <Slide in={showIn} timeout={timeout} style={{ transitionDelay: delay }}>
      {children}
    </Slide>
  );
};

export default UiSlide;
