import "./../css/login.css";
import "./../scss/login.scss";
import Slider from "../../carouselSlider/carouselSlider";
import TopIconsView from "./topIconsView/topIconsView";

const Leftsection = ({}) => {
  return (
    <div className='left-section '>
      <TopIconsView />
      <Slider />
    </div>
  );
};

export default Leftsection;
