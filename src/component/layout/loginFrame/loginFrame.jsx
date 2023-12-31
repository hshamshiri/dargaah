import { useState } from "react";
import LandingFrame from "./landingFrame/landingFrame";
import RightSection from "./rightSection/rightSection";
import Leftsection from "./leftSection/leftSection";
import Slider from "../carouselSlider/carouselSlider";
import TopIconsView from "./leftSection/topIconsView/topIconsView";
import "./scss/login.scss";
import "./css/login.css";
import { Box } from "@mui/material";

const LoginFrame = ({ children }) => {
  const [swipUp, setSwipUp] = useState(false);
  return (
    <Box className="body">
      <Box className="box">
        <RightSection setSwipUp={setSwipUp}>{children}</RightSection>
        <Leftsection>
          <TopIconsView />
          <Slider />
        </Leftsection>
      </Box>
      <LandingFrame swipUp={swipUp} setSwipUp={setSwipUp} />
    </Box>
  );
};

export default LoginFrame;
