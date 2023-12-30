import { DownloadSharp } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import palette from "../../../utils/colors";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

const UiIcon = ({ iconType, classes }) => {
  const theme = [{
    borderRadius: 15,
    width: 30,
    height: 30,
    padding: 0.5,
    right: 5,
    top: 5,
    position: "absolute",
    color: palette.darkBlue,
    backgroundColor: "white",
  }, classes];
  const icons = {
    //DownloadSharp: <DownloadSharp sx={{ sx }} />,
    "send": <Send sx={theme} />,
    "mobile": <PhoneAndroidIcon sx={theme} />,
    "volumeUp": <VolumeUpOutlinedIcon sx={theme} />,
    "refresh": <RefreshOutlinedIcon sx={theme} />
  };


  return (
    icons[iconType]
  );
};



export default UiIcon;
