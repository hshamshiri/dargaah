import { Button } from "@mui/material";
import palette from "../../../utils/colors";
import UiIcon from "../uiIcon/uiIcon";

/**
 * Button info
 * @param {string} props type:submit,standard
 * @param {string} props lable
 * @param {function} props
 * @param {boolean} props disable
 * @param {string} props variant:filled,outlined,standard,text,contained
 * @param {object} props classes
 * @param {string} props icon
 * @param {object} props classes
 * @param {string} props send/download
 * @param {string} props send/mobile/...
 *
 */
const UiButton = ({
  type,
  label,
  onclick,
  disable,
  variant,
  classes,
  iconType,
  iconName,
  sx,
}) => {
  return (
    <Button
      type={type}
      onClick={() => onclick()}
      disabled={disable || false}
      variant={variant || "filled"}
      className={`w-60 ${classes}`}
      startIcon={<UiIcon iconType={iconType} iconName={iconName} />}
      sx={[
        {
          borderRadius: 30,
          padding: 1,
          margin: 2,
          backgroundColor: palette.darkBlue,
          height: 40,
          width: 300,
          "@media only screen and (min-width: 980px)": {},
          "@media only screen and (min-width: 420px) and (max-width: 980px)": {
            width: 300,
          },
          "@media screen and (max-width: 420px)": {
            width: 200,
          },
        },
        sx,
      ]}
    >
      {label}
    </Button>
  );
};

export default UiButton;
