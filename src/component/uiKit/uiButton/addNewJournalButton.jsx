import UiButton from "./uiButton";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

export default function AddButton({ onClick }) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <UiButton
      onclick={onClick}
      variant={"contained"}
      iconName={"addAlbum"}
      iconType={"button"}
      iconColor={theme.palette.base.success}
      iconHoverColor={theme.palette.base.success}
      tooltipTitle={t("addNewJournal")}
    />
  );
}
