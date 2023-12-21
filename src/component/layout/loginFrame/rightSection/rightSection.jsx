import "./../css/login.css";
import "./../scss/login.scss";
import { useTranslation } from "react-i18next";
import swipDownImage from "./../images/swipeDown.png";
import iriLogo from "./../images/iriLogo.png";
import ssoTitle from "./../images/ssoTitle.png";

const SwipUpButton = ({ swipUp, setSwipUp }) => {
  const [t] = useTranslation();

  return (
    <div className="swipUpView ">
      <p className=" h-fit ">{t("login.rightSection.appDownload")}</p>
      <img
        className="w-20"
        src={swipDownImage}
        onClick={() => setSwipUp(true)}
      />
    </div>
  );
};
const TopView = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-1/4 ">
      <img className="w-1/6 mt-2 object-contain" src={iriLogo} />
      <img className="w-1/3 m-1 object-contain" src={ssoTitle} />
    </div>
  );
};

const RightSection = ({ swipUp, setSwipUp }) => {
  return (
    <div className="right-section">
      <TopView />
      <SwipUpButton swipUp={swipUp} setSwipUp={setSwipUp} />
    </div>
  );
};

export default RightSection;
