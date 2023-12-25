import { IconButton } from "@mui/material";
import { DownloadSharp } from "@mui/icons-material";
import { Send } from "@mui/icons-material";

/**
 * Form for user login
 * @param {string} props type:submit,standard
 * @param {string} props lable
 * @param {function} props
 * @param {boolean} props disable
 * @param {string} props variant:filled,outlined,standard,text,contained
 * @param {object} props classes
 * @param {string} props icon
 * @param {object} props classes
 *
 */
const UiIconButton = ({
  type,
  label,
  onclick,
  disable = false,
  variant = "filled",
  classes,
  icon,
}) => {
  return (
    <IconButton
      type={type}
      onClick={() => onclick()}
      disabled={disable}
      variant={variant}
      className={`w-60 h-10 ${classes}`}
      sx={{
        borderRadius: 30,
        margin: 2,
        backgroundColor: "#21b6ae",
      }}
    >
      {label}
      {icon === "send" ? <Send /> : <DownloadSharp />}
    </IconButton>
  );
};

export default UiIconButton;
