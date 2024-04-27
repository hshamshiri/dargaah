import React, { useState } from "react";
import { keyframes, Box } from "@mui/material";

const ShakingView = ({ children, sx }) => {
  const [shake, setShake] = useState(false);

  const inZoom = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };
  const outZoom = () => {
    setShake(false);
  };

  return (
    <Box
      onMouseEnter={inZoom}
      onMouseLeave={outZoom}
      sx={[
        shake && {
          animation: `${shakeAnime} 1s infinite ease`,
        },
        sx,
      ]}
    >
      {children}
    </Box>
  );
};

// const zoomIn = keyframes({
//   from: {
//     transition: `transform 1s`,
//   },
//   to: {
//     transform: `scale(1.2)`,
//   },
// });

const shakeAnime = keyframes({
  "0% ": { transform: `translate(2px, 1px)   rotate(0deg)` },
  "10%": { transform: `translate(-1px, -2px) rotate(-2deg)` },
  "20%": { transform: `translate(-3px, 0px)  rotate(3deg)` },
  "30%": { transform: `translate(0px, 2px)   rotate(0deg)` },
  "40%": { transform: `translate(1px, -1px)  rotate(1deg)` },
  "50%": { transform: `translate(-1px, 2px)  rotate(-1deg)` },
  "60%": { transform: `translate(-3px, 1px)  rotate(0deg)` },
  "70%": { transform: `translate(2px, 1px)   rotate(-2deg)` },
  "80%": { transform: `translate(-1px, -1px) rotate(4deg)` },
  "90%": { transform: `translate(2px, 2px)   rotate(0deg)` },
  "100%": { transform: `translate(1px, -2px)  rotate(-1deg)` },
});

export default ShakingView;
