import { useState } from "react";
import LandingFrame from "./landingFrame/landingFrame";
import RightSection from "./rightSection/rightSection";
import Leftsection from "./leftSection/leftSection";
import "./scss/login.scss";
import "./css/login.css";
import { Box } from "@mui/material";
import SwipUpButton from "./swipupButton";

const LoginFrame = ({ children }) => {
  const [swipUp, setSwipUp] = useState(false);
  return (
    <Box className='body'>
      <Box className='box' position={"relative"}>
        <SwipUpButton swipUp={swipUp} setSwipUp={setSwipUp} />
        <RightSection setSwipUp={setSwipUp}>{children}</RightSection>
        <Leftsection />
      </Box>
      <LandingFrame swipUp={swipUp} setSwipUp={setSwipUp} />
    </Box>
  );
};

export default LoginFrame;
