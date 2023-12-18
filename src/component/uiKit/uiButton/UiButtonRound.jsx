import { Button } from "@mui/material";



const UiButtonRound = ({ title, onclick, classes }) => {

    return (

        <Button onClick={() => onclick()} variant="outlined" sx={{ borderRadius: 28, color: "white", borderColor: "white", margin: 1 }} className={`w-60 white  ${classes}`} >
            {title}
        </Button>

    )
}





export default UiButtonRound