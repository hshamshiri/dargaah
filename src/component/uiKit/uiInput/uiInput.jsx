import * as React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import RtlDirection from "../../../utils/changeDirection";
import UiIcon from "../uiIcon/uiIcon";
import { useTheme } from "@mui/material";

const UiInputText = ({
  id = "outlined-basic", //outlined-basic
  type,
  name,
  label,
  variant = "outlined", //outlined
  error = false, //Bool
  helperText, //like error description
  placeHolder,
  defaultValue,
  onChange,
  required,
  startAdornment,
  iconType,
  iconName,
  endAdornment,
  captcha,
  captchaView: CaptchaView,
  maxLength,
  hidden,
  sx,
}) => {
  const theme = useTheme("theme");
  return (
    <RtlDirection>
      <TextField
        id={id}
        type={type}
        name={name}
        label={label}
        variant={variant}
        error={error}
        helperText={helperText}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        hidden={hidden}
        size="small"
        sx={sx}
        InputLabelProps={{
          style: { fontFamily: theme.typography.fontFamily, fontSize: 14 },
        }}
        inputProps={{
          maxLength: maxLength,
        }}
        FormHelperTextProps={{
          style: {
            fontFamily: theme.typography.fontFamily,
          },
        }}
        InputProps={{
          sx: {
            borderRadius: 10,
            width: 300,
            "@media only screen and (min-width: 980px)": {
              width: 270,
            },
            "@media only screen and (min-width: 420px) and (max-width: 980px)":
              {
                width: 300,
              },
            "@media screen and (max-width: 420px)": {
              width: 200,
            },
            fontFamily: theme.typography.fontFamily,
            fontSize: 16,
          },
          startAdornment: startAdornment && (
            <InputAdornment position="start">
              <UiIcon iconType={iconType} iconName={iconName} />
            </InputAdornment>
          ),
          endAdornment: captcha ? (
            <CaptchaView />
          ) : (
            <InputAdornment position="end">
              <UiIcon iconType={iconType} iconName={iconName} />
            </InputAdornment>
          ),
        }}
      />
    </RtlDirection>
  );
};

export default UiInputText;
