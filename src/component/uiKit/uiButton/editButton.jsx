
import UiButton from "./uiButton"
import { useTranslation } from "react-i18next"
import { useTheme } from "@emotion/react"


export default function EditButton({ onClick, hover = true }) {
    const { t } = useTranslation()
    const theme = useTheme()
    return (
        <UiButton
            onclick={onClick}
            //label={t("dashboard.main.edit")}
            variant={"contained"}
            iconName={"editIcon"}
            iconType={"button"}
            iconColor={theme.palette.base.edit}
            iconHoverColor={hover && theme.palette.base.edit}
            tooltipTitle={t("dashboard.main.updateBoxName")}
        />
    )
}