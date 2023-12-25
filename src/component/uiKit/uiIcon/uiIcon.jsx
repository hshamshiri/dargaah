import { DownloadSharp } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import palette from "../../../utils/colors";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const UiIcon = ({ iconType }) => {

  return (
    icons[iconType]
  );
};

const theme = {
  borderRadius: 15,
  width: 30,
  height: 30,
  padding: 0.5,
  left: "85%",
  top: "10%",
  position: "absolute",
  color: palette.darkBlue,
  backgroundColor: "white",
};
const icons = {
  //DownloadSharp: <DownloadSharp sx={{ sx }} />,
  "send": <Send sx={theme} />,
  "mobile": <PhoneAndroidIcon sx={theme} />
};

export default UiIcon;
