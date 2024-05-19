
import { useTranslation } from "react-i18next"
import { useTheme } from "@emotion/react"
import Grid from "@mui/material/Unstable_Grid2";
import UiIcon from "../uiIcon/uiIcon";
import UiTooltip from "../uiTooltip/uiTooltip";


export default function AddNewboxButton({ onClick }) {
    const { t } = useTranslation()
    const theme = useTheme()
    return (
        <UiTooltip title={t("dashboard.main.addBox")} placement="top">
            <Grid
                onClick={() => onClick()}
                container
                minHeight={150}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={5}
                border={`4px dashed gray`}
                backgroundColor={"white"}
                xs={12}
                sm={12}
                md={12}
                sx={{
                    ':hover': {
                        boxShadow: 5,
                        borderColor: theme.palette.base.success
                    },
                }}
            >

                <UiIcon
                    iconName={"addIcon"}
                    iconColor={theme.palette.disable.dark}
                    sx={{
                        width: "100%", height: 150, ':hover': {
                            color: theme.palette.base.success,
                        },
                    }}
                />
            </Grid >
        </UiTooltip>

    )
}