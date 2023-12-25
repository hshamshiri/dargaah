import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RtlDirection from "../../../utils/changeDirection";
import UiIcon from "../uiIcon/uiIcon";


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
  captcha
}) => {

  return (
    <RtlDirection>
      <TextField
        id={id}
        label={label}
        variant={variant}
        error={error}
        helperText={helperText}
        placeholder={placeHolder}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e)}
        required={required}
        size="small"
        InputProps={{
          sx: {
            borderRadius: 10,
            width: 250
          },
          startAdornment: startAdornment && (
            <InputAdornment position="start">
              <UiIcon iconType={iconType} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <UiIcon iconType={iconType} />
            </InputAdornment>
          ),
        }}

      />
    </RtlDirection>
  );
};

export default UiInputText;
