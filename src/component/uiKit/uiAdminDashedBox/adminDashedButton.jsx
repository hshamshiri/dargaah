import OptionButtons from "./optionButtons"
import { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


const AdminDashedButton = ({ handleForms, boxInfo, buttonInfo }) => {
  const [showOption, setShowOption] = useState(false)

  return (
    <Fragment>
      {/* <ShakingView sx={{ marginTop: 3, backgroundColor: "red" }}> */}
      <Grid
        marginTop={5}
        onMouseOver={() => setShowOption(true)}
        onMouseLeave={() => setShowOption(false)}
      >
        <Box
          display={"flex"}
        >

          {/* <Link to={buttonDetalis?.link || "#"}> */}
          <Box width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              component="img"
              sx={{
                maxHeight: 80,
              }}
              alt="button image"
              src={buttonInfo?.image_url && buttonInfo?.image_url}
            />
            <Typography width={"80%"} whiteSpace={"wrap"} overflow={"hidden"} textOverflow={"ellipsis"} marginTop={1}  >
              {buttonInfo?.label}
            </Typography>
          </Box>

          {showOption && <OptionButtons
            handleForms={handleForms}
            boxInfo={boxInfo}
            buttonInfo={buttonInfo}
          />}

        </Box>

        {/* </Link> */}
      </Grid>
      {/* </ShakingView> */}
    </Fragment >
  );
};



export default AdminDashedButton;
