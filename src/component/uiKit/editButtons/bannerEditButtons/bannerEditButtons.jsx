
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import EditButton from "../../uiButton/editButton"
import AddImageButton from "../../uiButton/addImageButton"


const BannerEditButtons = ({ handleForms }) => {
    const [t] = useTranslation()
    return (
        <Box width={"100%"} display={"flex"} justifyContent={"start"}>
            <EditButton onClick={() =>
                handleForms("editSliderImages", "", "", "topSlider")
            } />
            <AddImageButton onClick={() => handleForms("addTopImageSlider")} />
        </Box>
    )
}


export default BannerEditButtons