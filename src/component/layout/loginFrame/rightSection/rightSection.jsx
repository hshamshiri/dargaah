import "./../css/login.css";
import "./../scss/login.scss";
import { useTranslation } from "react-i18next";
import swipDownImage from "./../images/swipeDown.png";
import iriLogo from "./../images/iriLogo.png";
import ssoTitle from "./../images/ssoTitle.png";
import { Box, Typography } from "@mui/material";

const SwipUpButton = ({ swipUp, setSwipUp }) => {
  const [t] = useTranslation();

  return (
    <Box className="swipUpView ">
      <Typography className=" h-fit ">{t("login.rightSection.appDownload")}</Typography>
      <img
        className="w-20"
        src={swipDownImage}
        onClick={() => setSwipUp(true)}
      />
    </Box>
  );
};
const TopView = () => {
  return (
    <Box className="flex flex-col justify-center items-center w-full h-1/4 ">
      <img className="w-1/6 mt-2 object-contain" src={iriLogo} />
      <img className="w-1/4 m-1 object-contain" src={ssoTitle} />
    </Box>
  );
};

const RightSection = ({ children, swipUp, setSwipUp }) => {
  return (
    <Box className="right-section">
      <TopView />
      {children}
      <SwipUpButton swipUp={swipUp} setSwipUp={setSwipUp} />
    </Box>
  );
};

export default RightSection;
