import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const UiTopSlider = ({
  images,
  interval = 10000,
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
      changeOnFirstRender={true}
      indicators={false}
      sx={[{}, sx]}
    >
      {images.map((image, i) => (
        <Item key={uuidv4()} image={image} />
      ))}
    </Carousel>
  );
};

export default UiTopSlider;
