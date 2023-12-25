import { useState } from "react";
import LandingFrame from "./landingFrame/landingFrame";
import BoxFrame from "./boxFrame/boxFrame";
import RightSection from "./rightSection/rightSection";
import Leftsection from "./leftSection/leftSection";
import Slider from "../carouselSlider/carouselSlider";
import TopIconsView from "./leftSection/topIconsView/topIconsView";
import "./scss/login.scss";
import "./css/login.css";

const LoginFrame = ({ children }) => {
  const [swipUp, setSwipUp] = useState(false);
  return (
    <div className="body">
      <BoxFrame setSwipUp={setSwipUp}>
        <RightSection setSwipUp={setSwipUp}>{children}</RightSection>
        <Leftsection>
          <TopIconsView />
          <Slider />
        </Leftsection>
      </BoxFrame>
      <LandingFrame swipUp={swipUp} setSwipUp={setSwipUp} />
    </div>
  );
};

export default LoginFrame;
