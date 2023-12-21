import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./../scss/login.scss";
import "./../css/login.css";
import { clsx } from "clsx";
import AppPreview from "./../images/AppPreview.png";
import swipeUpImage from "./../images/swipeUp.png";
import directLink from "./../images/directLink.png";

const LandingFrame = ({ swipUp, setSwipUp }) => {
  const { t } = useTranslation();
  return (
    <div id="landing" className={`landing ${clsx({ open: swipUp })}`}>
      <div id="swipeDownloadAppClose" onClick={() => setSwipUp(!swipUp)}>
        <p>{t("login.landing.enter")}</p>
        <img src={swipeUpImage} alt="Login" />
      </div>
      <img className="appPreview" src={AppPreview} alt="" />
      <h3>{t("login.landing.downloadLine1")}</h3>
      <h4>{t("login.landing.downloadLine2")}</h4>
      <div className="downloads">
        <a href="#" className="downloadApp">
          <img src={directLink} />
        </a>
      </div>
      <p></p>
    </div>
  );
};

export default LandingFrame;
