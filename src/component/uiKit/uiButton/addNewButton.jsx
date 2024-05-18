
import UiButton from "./uiButton"
import { useTranslation } from "react-i18next"

export default function AddNewButton({ onClick }) {
    const { t } = useTranslation()
    return (
        <UiButton
            onclick={onClick}
            variant={"contained"}
            tooltipTitle={t("dashboard.main.addBtn")}
            sx={{ cursor: "pointer" }}
            iconSx={{
                width: 80,
                height: 80,
                border: "dashed",
                borderWidth: 4,
                borderRadius: 0,
                backgroundColor: "trnsparent",
            }}
            iconName={"addIcon"} iconColor={"lightgray"} iconHoverColor={"gray"}
        />

    )
}