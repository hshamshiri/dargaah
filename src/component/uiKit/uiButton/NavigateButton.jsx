import UiButton from "./uiButton";
import { useTheme } from "@emotion/react";

export default function NavigateButton({ label, iconName, onClick }) {
  const theme = useTheme();
  return (
    <UiButton
      label={label}
      onclick={onClick}
      variant='contained'
      iconType={"icon"}
      iconName={iconName}
      iconColor={theme.palette.base.mid}
      iconSx={{ height: 30, width: 30 }}
      backgroundColor={theme.palette.gradient.medium}
      sx={{ width: 200, fontSize: 15, marginTop: 1 }}
    />
  );
}
