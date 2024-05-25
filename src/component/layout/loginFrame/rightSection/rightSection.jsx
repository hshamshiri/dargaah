import "./../css/login.css";
import "./../scss/login.scss";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import swipDownImage from "./../images/swipeDown.png";
import { useSelector } from "react-redux";

const RightSection = ({ children }) => {
  return <Box className='right-section'>{children}</Box>;
};

export default RightSection;
