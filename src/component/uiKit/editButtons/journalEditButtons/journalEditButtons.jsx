


import { Box } from "@mui/material"
import EditButton from "../../uiButton/editButton"
import AddImageButton from "../../uiButton/addImageButton"

const JournalEditButtons = ({ handleForms }) => {
    return (
        <Box width={"100%"} display={"flex"} justifyContent={"start"} marginY={1}>
            <EditButton onClick={() =>
                handleForms("editSliderImages", "", "", "leftSlider")
            } />
            <AddImageButton onClick={() => handleForms("addLeftImageSlider")} />
        </Box>

    )
}

export default JournalEditButtons







