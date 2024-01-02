import React, { useEffect } from "react";
import Slide from "@mui/material/Slide";

const UiSlide = ({ children, timeout = 1000, delay = 0 }) => {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Slide in={show} timeout={timeout} style={{ transitionDelay: delay }}>
      {children}
    </Slide>
  );
};

export default UiSlide;
