import * as React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import RtlDirection from "../../../utils/changeDirection";

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
  endAdornment,
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
        InputProps={{
          sx: {
            borderRadius: 10,
            width: 250,
          },
          startAdornment: startAdornment && (
            <InputAdornment position="start">kg</InputAdornment>
          ),
          endAdornment: endAdornment && (
            <InputAdornment position="end">kg</InputAdornment>
          ),
        }}
        size="small"
      />
    </RtlDirection>
  );
};

export default UiInputText;
