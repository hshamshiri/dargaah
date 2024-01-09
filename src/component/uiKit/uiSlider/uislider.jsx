import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { useTranslation } from "react-i18next";
import slide1 from "../../../images/2.jpg";
import slide2 from "../../../images/3.jpg";
import slide3 from "../../../images/4.jpg";
import { Box, Typography } from "@mui/material";

const UiSlider = ({
  interval = 4000,
  duration = 2000,
  animation = "slide",
  swipe = "true",
  sx,
}) => {
  const [t] = useTranslation();
  var items = [
    {
      name: "slide1",
      src: slide1,
      description: "",
      app: false,
    },
    {
      name: "slide2",
      src: slide2,
      description: "",
      app: false,
    },
    {
      name: "slide3",
      src: slide3,
      description: "",
      app: false,
    },
  ];

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
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default UiSlider;
