import * as React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import RtlDirection from "../../../utils/changeDirection";
import UiIcon from "../uiIcon/uiIcon";
import { useTheme } from "@mui/material";




const UiInputText = ({
  id = "outlined-basic", //outlined-basic
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
  endAdornment,
  captcha,
  captchaView: CaptchaView,
  maxLength
}) => {
  const theme = useTheme("theme")
  return (
    <RtlDirection>
      <TextField
        id={id}
        label={label}
        variant={variant}
        error={error}
        helperText={<typography>{helperText}</typography>}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e)}
        required={required}
        size="small"
        InputLabelProps={{ style: { fontFamily: theme.typography.fontFamily, fontSize: 14 } }}
        inputProps={{
          maxLength: maxLength,
        }}
        InputProps={{
          sx: {
            borderRadius: 10,
            width: 300,
            '@media only screen and (min-width: 980px)': {

            },
            '@media only screen and (min-width: 420px) and (max-width: 980px)': {
              width: 300
            },
            '@media screen and (max-width: 420px)': {
              width: 200
            },
            fontFamily: theme.typography.fontFamily,
            fontSize: 16,

          },
          startAdornment: startAdornment && (
            <InputAdornment position="start">
              <UiIcon iconType={iconType} />
            </InputAdornment>
          ),
          endAdornment: (
            captcha ? < CaptchaView /> :
              <InputAdornment position="end">
                <UiIcon iconType={iconType} />
              </InputAdornment>
          ),
        }}

      />

    </RtlDirection >
  );
};

export default UiInputText;
