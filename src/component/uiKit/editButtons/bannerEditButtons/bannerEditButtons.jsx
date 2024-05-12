
import UiButton from "../../uiButton/uiButton"
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"

const BannerEditButtons = ({ handleForms }) => {
    const [t] = useTranslation()
    return (
        <Box width={"100%"} display={"flex"} justifyContent={"end"}>
            <UiButton
                onclick={() =>
                    handleForms("editSliderImages", "", "", "topSlider")
                }
                variant={"contained"}
                iconName={"editIcon"}
                iconType={"button"}
                tooltipTitle={t("dashboard.main.editImages")}
            />

            <UiButton
                onclick={() => handleForms("addTopImageSlider")}
                variant={"contained"}
                iconName={"addImage"}
                iconType={"button"}
                tooltipTitle={t("dashboard.main.addImage")}
            />
        </Box>
    )
}


export default BannerEditButtons