import React, { useEffect } from "react";
import Zoom from "@mui/material/Zoom";

const UiZoom = ({ children, timeout = 1000, delay = 500 }) => {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Zoom in={show} timeout={timeout} style={{ transitionDelay: delay }}>
      {children}
    </Zoom>
  );
};

export default UiZoom;
