import { DownloadSharp } from "@mui/icons-material";
import { Send } from "@mui/icons-material";
import palette from "../../../utils/colors";

const UiIcon = ({ type }) => {
  return (
    <Send
      sx={{
        borderRadius: 15,
        width: 30,
        height: 30,
        padding: 0.5,
        left: "85%",
        top: "10%",
        position: "absolute",
        color: palette.darkBlue,
        backgroundColor: "white",
      }}
    />
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
  backgroundColor: "white",
};
const icons = {
  //DownloadSharp: <DownloadSharp sx={{ sx }} />,
  send: (
    <Send
      sx={{
        borderRadius: 15,
        width: 30,
        height: 30,
        padding: 0.5,
        left: "85%",
        top: "10%",
        position: "absolute",
        backgroundColor: "white",
      }}
    />
  ),
};

export default UiIcon;
