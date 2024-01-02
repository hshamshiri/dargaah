import React, { useEffect } from "react";
import Collapse from "@mui/material/Collapse";

const UiCollapse = ({ children, timeout = 1000, delay = 500 }) => {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Collapse in={show} timeout={timeout} style={{ transitionDelay: delay }}>
      {children}
    </Collapse>
  );
};

export default UiCollapse;
