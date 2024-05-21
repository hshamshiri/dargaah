import "./../css/login.css";
import "./../scss/login.scss";
import { useTranslation } from "react-i18next";
import swipDownImage from "./../images/swipeDown.png";
import seplogo from "./../images/sepaah.png";
import { Box, Typography } from "@mui/material";

const TopView = () => (
  <Box width={100} margin={2} component={"img"} src={seplogo} />
);

const RightSection = ({ children }) => {
  return (
    <Box className='right-section'>
      <TopView />
      {children}
    </Box>
  );
};

export default RightSection;
