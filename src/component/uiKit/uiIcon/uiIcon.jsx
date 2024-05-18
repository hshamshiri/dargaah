
import Send from "@mui/icons-material/Send";
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
import AddIcon from '@mui/icons-material/Add';
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from '@mui/icons-material/EditNote';
import CloseIcon from '@mui/icons-material/Close';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useTheme } from "@mui/material";


const UiIcon = ({ iconType, iconName, iconColor, iconHoverColor, sx }) => {
  const theme = useTheme();
  const iconStyle = [
    {
      borderRadius: 15,
      width: 40,
      height: 40,
      padding: 0.8,
      color: iconColor ? iconColor : theme.palette.base?.main,
      ':hover': {
        bgcolor: iconHoverColor,
        color: iconHoverColor && 'white',
      },
    },
    iconType === "button" && {
      position: "absolute",
      right: 0,
      top: 0,
      backgroundColor: "white",
      //border: 1,
    },

    sx,
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
    addIcon: <AddIcon sx={iconStyle} />,
    addFolder: <CreateNewFolderIcon sx={iconStyle} />,
    addImage: <AddPhotoAlternateIcon sx={iconStyle} />,
    editCalender: <EditCalendarIcon sx={iconStyle} />,
    editIcon: <EditNoteIcon sx={iconStyle} />,
    delete: <DeleteForeverIcon sx={iconStyle} />,
    close: <CloseIcon sx={iconStyle} />,
    manager: <ManageAccountsIcon sx={iconStyle} />
  };

  return icons[iconName];
};

export default UiIcon;
