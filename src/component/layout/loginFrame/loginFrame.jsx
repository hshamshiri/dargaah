import { useEffect, useState } from "react";
import LandingFrame from "./landingFrame/landingFrame";
import BoxFrame from "./boxFrame/boxFrame"
import RightSection from "./rightSection/rightSection";
import Leftsection from "./leftSection/leftSection";
import Slider from "../carouselSlider/carouselSlider";
import IconsView from "./leftSection/topIconsView/topIconsView";
import "./scss/login.scss";
import "./css/login.css";

const LoginFrame = () => {
  const [swipUp, setSwipUp] = useState(true);
  return (
    <div className="body">
      <BoxFrame setSwipUp={setSwipUp}>
        <RightSection setSwipUp={setSwipUp} />
        <Leftsection >
          <IconsView />
          <Slider />
        </Leftsection>
      </BoxFrame>
      <LandingFrame swipUp={swipUp} setSwipUp={setSwipUp} />
    </div>
  );
};

export default LoginFrame;
