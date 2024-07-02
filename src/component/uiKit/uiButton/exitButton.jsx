import UiButton from "./uiButton";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

export default function ExitButton({
  onClick,
  toolTipPlacement,
  hover = true,
}) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <UiButton
      onclick={onClick}
      //label={t("dashboard.main.edit")}
      variant={"contained"}
      iconName={"power"}
      iconType={"button"}
      iconColor={theme.palette.base.error}
      iconHoverColor={hover && theme.palette.base.error}
      tooltipTitle={t("exit")}
      toolTipPlacement={toolTipPlacement}
    />
  );
}
