
import UiButton from "./uiButton"
import { useTranslation } from "react-i18next"
import { useTheme } from "@emotion/react"


export default function LoginButton({ label }) {
    const { t } = useTranslation()
    const theme = useTheme()
    return (
        <UiButton
            type="submit"
            label={label}
            //onclick={submitAction}
            variant="contained"
            iconType={"icon"}
            iconName={"key"}
            iconColor={theme.palette.base.mid}
            iconSx={{ height: 30, width: 30 }}
            backgroundColor={theme.palette.gradient.medium}
            sx={{ width: 200, fontSize: 15, marginTop: 1 }}
        />
    )
}