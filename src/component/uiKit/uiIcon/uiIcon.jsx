import { DownloadSharp } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import palette from "../../../utils/colors";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DevicesIcon from "@mui/icons-material/Devices";
import SchoolIcon from "@mui/icons-material/School";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const UiIcon = ({ iconType, iconName, classes }) => {
  const theme = [
    {
      borderRadius: 15,
      width: 30,
      height: 30,
      padding: 0.5,
      color: palette.darkBlue,
    },
    iconType === "button" && {
      right: 5,
      top: 5,
      position: "absolute",
      backgroundColor: "white",
    },
    classes,
  ];
  const icons = {
    //DownloadSharp: <DownloadSharp sx={{ sx }} />,
    send: <Send sx={theme} />,
    mobile: <PhoneAndroidIcon sx={theme} />,
    volumeUp: <VolumeUpOutlinedIcon sx={theme} />,
    refresh: <RefreshOutlinedIcon sx={theme} />,
    download: <DownloadIcon sx={theme} />,
    contact: <ContactSupportIcon sx={theme} />,
    phone: <LocalPhoneIcon sx={theme} />,
    info: <InfoIcon sx={theme} />,
    //side menu
    home: <HomeIcon sx={theme} />,
    notification: <NotificationsActiveIcon sx={theme} />,
    mychild: <Diversity3Icon sx={theme} />,
    servieces: <DevicesIcon sx={theme} />,
    graduates: <SchoolIcon sx={theme} />,
    organizational: <CorporateFareIcon sx={theme} />,
    dots: <MoreVertIcon sx={theme} />,
    power: <PowerSettingsNewIcon sx={theme} />,
  };

  return icons[iconName];
};

export default UiIcon;
