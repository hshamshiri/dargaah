import { Button } from "@mui/material";
import UiIcon from "../uiIcon/uiIcon";
import UiTooltip from "../uiTooltip/uiTooltip";

/**
 * Button info
 * @param {string} props type:submit,standard
 * @param {string} props lable
 * @param {function} props onclick
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
  onclick = () => {},
  disable,
  variant,
  //classes,
  iconType,
  iconName,
  component,
  backgroundColor = "white",
  color = "white",
  hoverColor = "white",
  iconColor,
  iconHoverColor,
  tooltipTitle,
  toolTipPlacement,
  iconSx,
  sx,
}) => {
  return (
    <UiTooltip title={tooltipTitle} placement={toolTipPlacement}>
      <Button
        type={type}
        onClick={onclick}
        disabled={disable || false}
        variant={variant || "filled"}
        //className={`${classes}`}
        endIcon={
          <UiIcon
            iconType={iconType}
            iconName={iconName}
            iconColor={iconColor}
            iconHoverColor={iconHoverColor}
            sx={iconSx}
          />
        }
        component={component}
        sx={{
          //borderRadius: "20px",
          padding: 1,
          background: backgroundColor, //(theme) => theme.palette.gradient.medium,
          height: 40,
          boxShadow: 0,
          width: 40,
          marginRight: 0.5,
          minWidth: 40,
          borderRadius: 5,
          ":hover": {
            bgcolor: hoverColor, // HoverColor, // theme.palette.primary.main
            color: color,
            boxShadow: 2,
          },
          ...sx,
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
    </UiTooltip>
  );
};

export default UiButton;
