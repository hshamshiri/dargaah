import "./../css/login.css";
import "./../scss/login.scss";
import { useTranslation } from "react-i18next";
import swipDownImage from "./../images/swipeDown.png";
import seplogo from "./../images/sepaah.png";
import { Box, Typography } from "@mui/material";

const SwipUpButton = ({ swipUp, setSwipUp }) => {
  const [t] = useTranslation();

  return (
    <Box className="swipUpView">
      <Typography className=" h-fit ">
        {t("login.rightSection.appDownload")}
      </Typography>
      <img
        alt="swip"
        className="w-20"
        src={swipDownImage}
        onClick={() => setSwipUp(true)}
      />
    </Box>
  );
};
const TopView = () => {
  return (
    <Box className="flex flex-col justify-center items-center w-full h-1/3">
      <img alt="sepLogo" className="w-1/6 mt-5 object-contain" src={seplogo} />
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
