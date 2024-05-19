
import { Box, Tooltip, Zoom } from "@mui/material";



const UiTooltip = ({ title, placement = "top", children }) => {
    return (
        <Tooltip title={title} placement={placement} arrow
            TransitionComponent={Zoom}>
            {children}
        </Tooltip>
    )
}

export default UiTooltip