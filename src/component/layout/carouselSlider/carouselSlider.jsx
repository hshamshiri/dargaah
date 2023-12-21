import Carousel from "react-material-ui-carousel";
import Item from "./items";
import { useTranslation } from "react-i18next";
import appPreview from "./images/AppPreview.png";
import slide1 from "./images/Slide1.png";
import slide2 from "./images/Slide2.png";
import slide3 from "./images/Slide3.png";

const Slider = ({ props }) => {
  const [t] = useTranslation();
  var items = [
    {
      name: "slide1",
      src: slide1,
      description: t("login.slider.slide1"),
      app: false,
    },
    {
      name: "slide2",
      src: slide2,
      description: t("login.slider.slide2"),
      app: false,
    },
    {
      name: "slide3",
      src: slide3,
      description: t("login.slider.slide3"),
      app: false,
    },
    {
      name: "appPreview",
      src: appPreview,
      description: t("login.slider.slide4"),
      appButtonTitle: t("login.slider.downloadButton"),
      app: true,
    },
  ];

  return (
    <Carousel
      //autoPlay={false}
      stopAutoPlayOnHover
      interval={4000}
      animation="fade"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Slider;
