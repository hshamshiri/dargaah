import UiButton from "./uiButton";
import { useTranslation } from "react-i18next";

export default function AddNewButton({ onClick }) {
  const { t } = useTranslation();
  return (
    <UiButton
      onclick={onClick}
      variant={"contained"}
      tooltipTitle={t("dashboard.main.addBtn")}
      toolTipPlacement='top-start'
      sx={{ cursor: "pointer" }}
      iconSx={{
        width: 80,
        height: 80,
        border: "dashed",
        borderWidth: 2,
        borderRadius: 0,
        backgroundColor: "trnsparent",
      }}
      hoverColor='red'
      iconName={"addIcon"}
      iconColor={"lightgray"}
      iconHoverColor={"gray"}
    />
  );
}
