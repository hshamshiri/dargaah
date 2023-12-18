import Carousel from "react-material-ui-carousel";
import Item from "./items";
import appPreview from "./images/AppPreview.png";
import slide1 from "./images/Slide1.png";
import slide2 from "./images/Slide2.png";
import slide3 from "./images/Slide3.png";

const Slider = ({ props }) => {
  var items = [
    {
      name: "slide1",
      src: slide1,
      description:
        "دسترسی به خدمات حوزه سلامت، آموزش، اقتصادی، امور عمومی و ثبت نام یارانه با ورود به پنجره ملی خدمات دولت هوشمند.",
      app: false
    },
    {
      name: "slide2",
      src: slide2,
      description:
        "ارائه خدمات مستقیم استعلامی و اتصال به سامانه‌های دولتی بدون احراز هویت مجدد.",
      app: false
    },
    {
      name: "slide3",
      src: slide3,
      description:
        "با ورود به پنجره ملی خدمات دولت هوشمند از قابلیت‌های دسترسی سریع به خدمات، احراز هویت یکپارچه و حفظ حریم خصوصی کاربران بهرمند شوید.",
      app: false
    },
    {
      name: "appPreview",
      src: appPreview,
      description: "دانلود اپلیکیشن پنجره ملی خدمات دولت هوشمند",
      appButtonTitle: "دانلود اپلیکیشن",
      app: true
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
