import { useEffect, useState } from "react";
import LandingFrame from "./landingFrame";
import RightSection from "./rightSection";
import Leftsection from "./leftSection";
import "./scss/login.scss";
import "./css/login.css";

const LoginFrame = () => {
  const [swipUp, setSwipUp] = useState(true);
  return (
    <div className="body">
      <div className="box">
        <RightSection setSwipUp={setSwipUp} />
        <Leftsection />
      </div>
      <LandingFrame swipUp={swipUp} setSwipUp={setSwipUp} />
    </div>
  );
};

export default LoginFrame;
