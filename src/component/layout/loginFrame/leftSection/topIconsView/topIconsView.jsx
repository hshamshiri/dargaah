import { Link } from "react-router-dom";
import logo from "../../images/icons/ITOLogo.png";
import infoIcon from "../../images/icons/InfoIcon.png";
import phoneIcon from "../../images/icons/PhoneIcon.png";
import messageIcon from "../../images/icons/messageQuestionIcon.png";
import clsx from "clsx";

const SingleIcon = ({ route, onclick, imageSrc }) => {
  return (
    <Link to={route} target="_blank">
      <img
        src={imageSrc}
        onClick={() => onclick()}
        className="mx-4 cursor-pointer"
      />
    </Link>
  );
};

const Divider = ({ className }) => {
  return <span className={`border opacity-30 cursor-pointer`} />;
};

const TopIconsView = () => {
  const iconAction = () => {};
  return (
    <div className="flex w-full h-20 justify-between ">
      <div className=" flex flex-row  items-center w-2/3">
        <div className="flex mt-5 mr-5">
          <SingleIcon route="#" onclick={iconAction} imageSrc={infoIcon} />
          <Divider />
          <SingleIcon route="#" onclick={iconAction} imageSrc={messageIcon} />
          <Divider />
          <SingleIcon route="#" onclick={iconAction} imageSrc={phoneIcon} />
        </div>
      </div>
      <div className="flex w-1/3 justify-center items-center  ">
        <img src={logo} className="w-2/3 h-2/3 object-contain mt-5 mr-5" />
      </div>
    </div>
  );
};

export default TopIconsView;
