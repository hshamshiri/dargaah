import { Button } from "@mui/material";


const UiButton=({title,className})=>{

    return(
        <Button variant="contained" className={`${className}`}> 
            {title}
        </Button>
    )
}

export default UiButton