import { useTranslation } from "react-i18next";
import swipDownImage from "./images/swipeDown.png";
import { Box } from "@mui/material";

export default function SwipUpButton({ swipUp, setSwipUp }) {
  const [t] = useTranslation();

  return (
    <Box
      display={{ md: "none" }}
      width={"100%"}
      position={"absolute"}
      bottom={0}
    >
      <Box
        component={"img"}
        src={swipDownImage}
        onClick={() => setSwipUp(true)}
      />
    </Box>
  );
}
