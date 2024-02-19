import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";


const UiTopSlider = ({
  interval = 7000,
  duration = 3000,
  animation = "slide",
  swipe = "true",
  sx,
}) => {
  const images = useSelector((state) => state?.uiConfigeJson.topSlider?.images);
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
      {images && images.length > 0 &&
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
