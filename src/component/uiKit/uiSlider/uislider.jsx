import { useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { v4 as uuidv4 } from "uuid";

const UiSlider = ({
  interval = 6000,
  duration = 3000,
  animation = "slide",
  swipe = "true",
  sx,
}) => {
  const journals = useSelector((state) => state?.uiConfigeJson?.journal_list?.images);

  return (
    <Carousel
      //autoPlay={false}
      stopAutoPlayOnHover
      interval={interval}
      duration={duration}
      animation={animation}
      swipe={swipe}
      changeOnFirstRender={true}
      sx={[{}, sx]}
      //indicator setting
      indicatorIconButtonProps={{
        style: {
          padding: "2px", // 1
          color: "drawer.main", // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          //backgroundColor: "red", // 2
        },
      }}
      indicatorContainerProps={
        {
          // style: {
          //   marginTop: "50px", // 5
          //   textAlign: "right", // 4
          // },
        }
      }
    >
      {journals && journals?.length > 0 && journals.map((image, i) => <Item key={uuidv4()} item={image} />)}
    </Carousel>
  );
};

export default UiSlider;
