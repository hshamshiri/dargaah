import "./css/login.css";
import "./scss/login.scss";
import swipDown from "./images/swipeDown.png";

const RightSection = ({ setSwipUp }) => {
  return (
    <div className="right-section">
      <img className="m-4" src={swipDown} onClick={() => setSwipUp(true)} />
    </div>
  );
};

export default RightSection;
