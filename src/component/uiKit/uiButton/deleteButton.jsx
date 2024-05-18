
import UiButton from "./uiButton"
import { useTranslation } from "react-i18next"
import { useTheme } from "@emotion/react"


export default function DeleteButton({ onClick, hover = true, toolTipPlacement }) {
    const { t } = useTranslation()
    const theme = useTheme()
    return (
        <UiButton
            onclick={onClick}
            variant={"contained"}
            iconName={"delete"}
            iconType={"button"}
            iconColor={theme.palette.base.error}
            iconHoverColor={hover && theme.palette.base.error}
            tooltipTitle={t("dashboard.main.deleteBox")}
            toolTipPlacement={toolTipPlacement}
        />

    )
}