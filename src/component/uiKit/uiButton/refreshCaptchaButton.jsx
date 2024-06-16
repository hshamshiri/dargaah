import UiButton from "./uiButton";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

export default function RefreshCaptchaButton({
  onClick,
  toolTipPlacement,
  hover = true,
  id = "ff",
}) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <UiButton
      id={id}
      onclick={onClick}
      variant={"contained"}
      iconName={"refresh"}
      iconType={"button"}
      iconColor={"black"}
      tooltipTitle={t("refresh")}
      toolTipPlacement={toolTipPlacement}
      backgroundColor='lightgray'
      iconHoverColor={theme.palette.base.edit}
      iconSx={{ backgroundColor: "lightgray" }}
    />
  );
}
