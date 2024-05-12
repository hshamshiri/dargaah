




















import UiButton from "../../uiButton/uiButton"
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"

const JournalEditButtons = ({ handleForms }) => {
    const [t] = useTranslation()
    return (
        <Box width={"100%"} display={"flex"} justifyContent={"end"} marginY={1}>
            <UiButton
                onclick={() => {
                    handleForms("editSliderImages", "", "", "leftSlider");
                }}
                variant={"contained"}
                iconName={"editIcon"}
                iconType={"button"}
                tooltipTitle={t("dashboard.main.editImages")}
            />

            <UiButton
                onclick={() => handleForms("addLeftImageSlider")}
                variant={"contained"}
                iconName={"addImage"}
                iconType={"button"}
                tooltipTitle={t("dashboard.main.addImage")}
            />
        </Box>
    )
}


export default JournalEditButtons







