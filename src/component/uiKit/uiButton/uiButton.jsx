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
 * @param {string} porps component:label/...
 */
const UiButton = ({
  type,
  label,
  onclick = () => { },
  disable,
  variant,
  classes,
  iconType,
  iconName,
  component,
  iconColor,
  sx,
}) => {
  return (
    <Button
      type={type}
      onClick={() => onclick()}
      disabled={disable || false}
      variant={variant || "filled"}
      className={`w-60 ${classes}`}
      endIcon={
        <UiIcon iconType={iconType} iconName={iconName} iconColor={iconColor} />
      }
      component={component}
      sx={{
        borderRadius: "10px",
        padding: 1,
        background: (theme) => theme.palette.gradient.light,
        height: 40,
        width: 300,
        ...sx,
        marginRight: 0.3,
        // "@media only screen and (min-width: 980px)": {},
        // "@media only screen and (min-width: 420px) and (max-width: 980px)": {
        //   width: 300,
        // },
        // "@media screen and (max-width: 420px)": {
        //   width: 200,
        // },
      }}
    >
      {label}
    </Button>
  );
};

export default UiButton;
