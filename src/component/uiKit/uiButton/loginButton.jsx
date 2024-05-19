
import UiButton from "./uiButton"
import { useTranslation } from "react-i18next"
import { useTheme } from "@emotion/react"


export default function LoginButton({ onClick, hover = true }) {
    const { t } = useTranslation()
    const theme = useTheme()
    return (
        <UiButton
            type="submit"
            label={t("login.form.sendCode")}
            //onclick={submitAction}
            variant="contained"
            iconType={"icon"}
            iconName={"send"}
            iconColor={theme.palette.base.mid}
            iconSx={{ height: 30, width: 30 }}
            sx={{ boxShadow: 3, width: 200, marginTop: 2, background: theme.palette.gradient.medium }}
        />
    )
}