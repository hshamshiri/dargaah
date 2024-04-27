import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import Item from "./items";



const UiTopSlider = ({
  interval = 7000,
  duration = 3000,
  animation = "slide",
  swipe = "true",
  sx,
}) => {
  const images = useSelector((state) => state?.uiConfigeJson.topSlider_list);

  return (
    <Carousel
      //autoPlay={false}
      stopAutoPlayOnHover
      interval={interval}
      duration={duration}
      animation={animation}
      swipe={swipe}
      indicators={true}
      height={200}
      sx={[{}, sx]}
    //changeOnFirstRender={true}
    // onChange={() => setHideDeleteIcon(true)}
    >
      {images && images?.length > 0 &&
        images.map((item, i) => {
          return (
            <Item item={item} key={i} />
          );
        })}
    </Carousel>
  );
};

export default UiTopSlider;
