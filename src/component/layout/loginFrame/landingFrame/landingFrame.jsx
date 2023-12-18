import "./../scss/login.scss";
import "./../css/login.css";
import { clsx } from "clsx";
import AppPreview from "./../images/AppPreview.png";
import swipeUpImage from "./../images/swipeUp.png";
import directLink from "./../images/directLink.png";

const LandingFrame = ({ swipUp, setSwipUp }) => {
  return (
    <div id="landing" className={`landing ${clsx({ open: swipUp })}`}>
      <div id="swipeDownloadAppClose" onClick={() => setSwipUp(!swipUp)}>
        <p>ورود</p>
        <img src={swipeUpImage} alt="Login" />
      </div>
      <img className="appPreview" src={AppPreview} alt="" />
      <p className="-top"></p>
      <h3>دانلود اپلیکیشن پنجره ملی خدمات دولت هوشمند</h3>
      <h4>یک درگاه برای ورود و استفاده از تمامی خدمات دولت هوشمند</h4>
      <div className="downloads">
        <a href="#" className="downloadApp">
          <img src={directLink} alt="دانلود مستقیم" />
        </a>
      </div>
      <p></p>
    </div>
  );
};

export default LandingFrame;
