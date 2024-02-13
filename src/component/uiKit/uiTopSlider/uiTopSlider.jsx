import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { Box, Hidden } from "@mui/material";
import UiIcon from "../uiIcon/uiIcon";

const UiTopSlider = ({
  images,
  interval = 7000,
  duration = 3000,
  animation = "slide",
  swipe = "true",
  sx,
}) => {
  return (
    <Carousel
      //autoPlay={false}
      stopAutoPlayOnHover
      interval={interval}
      duration={duration}
      animation={animation}
      swipe={swipe}
      //changeOnFirstRender={true}
      // onChange={() => setHideDeleteIcon(true)}
      indicators={false}
      sx={[{ position: "relative" }, sx]}
    >
      {images &&
        images.map((item, i) => {
          return (
            <Box key={uuidv4()}>
              <Item item={item} />
            </Box>
          );
        })}
    </Carousel>
  );
};

export default UiTopSlider;
