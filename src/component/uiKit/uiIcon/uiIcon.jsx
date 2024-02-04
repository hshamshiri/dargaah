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
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const UiIcon = ({ iconType, iconName, iconColor, classes }) => {
  const iconStyle = [
    {
      borderRadius: 15,
      width: 30,
      height: 30,
      padding: 0.5,
      color: iconColor ? iconColor : (theme) => theme.palette.base.main,
    },
    iconType === "button" && {
      position: "absolute",
      right: 5,
      top: 5,
      backgroundColor: "white",
    },
    classes,
  ];
  const icons = {
    //DownloadSharp: <DownloadSharp sx={{ sx }} />,
    send: <Send sx={iconStyle} />,
    mobile: <PhoneAndroidIcon sx={iconStyle} />,
    volumeUp: <VolumeUpOutlinedIcon sx={iconStyle} />,
    refresh: <RefreshOutlinedIcon sx={iconStyle} />,
    download: <DownloadIcon sx={iconStyle} />,
    contact: <ContactSupportIcon sx={iconStyle} />,
    phone: <LocalPhoneIcon sx={iconStyle} />,
    info: <InfoIcon sx={iconStyle} />,
    //side menu
    home: <HomeIcon sx={iconStyle} />,
    notification: <NotificationsActiveIcon sx={iconStyle} />,
    mychild: <Diversity3Icon sx={iconStyle} />,
    servieces: <DevicesIcon sx={iconStyle} />,
    graduates: <SchoolIcon sx={iconStyle} />,
    organizational: <CorporateFareIcon sx={iconStyle} />,
    dots: <MoreVertIcon sx={iconStyle} />,
    power: <PowerSettingsNewIcon sx={iconStyle} />,
    people: <PeopleAltIcon sx={iconStyle} />,
    add: <AddBoxIcon sx={iconStyle} />,
    addFolder: <CreateNewFolderIcon sx={iconStyle} />,
    addImage: <AddPhotoAlternateIcon sx={iconStyle} />,
    editCalender: <EditCalendarIcon sx={iconStyle} />,
    editIcon: <EditIcon sx={iconStyle} />,
    delete: <DeleteForeverIcon sx={iconStyle} />,
  };

  return icons[iconName];
};

export default UiIcon;
