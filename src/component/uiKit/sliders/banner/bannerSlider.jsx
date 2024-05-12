
import Carousel from "react-material-ui-carousel";
import Item from "./items";



const BannerSlider = ({
  interval = 7000,
  duration = 3000,
  animation = "slide",
  swipe = "true",
  sx,
  banners
}) => {

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
      {banners && banners?.length > 0 &&
        banners.map((item, i) => {
          return (
            <Item item={item} key={i} />
          );
        })}
    </Carousel>
  );
};

export default BannerSlider;
