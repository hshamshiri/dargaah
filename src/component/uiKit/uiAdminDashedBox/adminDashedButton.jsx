import OptionButtons from "./optionButtons"
import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShakingView from "../uiTransitions/uiShake/uiShake";
import { LazyLoadImage } from "react-lazy-load-image-component";


const AdminDashedButton = ({ handleForms, boxInfo, buttonInfo }) => {
  return (
    <Fragment>
      <ShakingView sx={{ marginTop: 3 }}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          position={"relative"}
          alignItems={"center"}
        >
          <OptionButtons
            handleForms={handleForms}
            boxInfo={boxInfo}
            buttonInfo={buttonInfo}
          />
          {/* <Link to={buttonDetalis?.link || "#"}> */}
          <Box

          >
            <LazyLoadImage
              //loading="lazy"
              style={{
                maxWidth: "100%",
                maxHeight: 80,
                heightL: 80,
              }}
              src={
                buttonInfo?.image_url && buttonInfo?.image_url
              }
            />
          </Box>
          <Box>
            <Typography display={"flex"} margin={1}>
              {buttonInfo?.label}
            </Typography>
          </Box>

          {/* </Link> */}
        </Grid>
      </ShakingView>
    </Fragment>
  );
};



export default AdminDashedButton;
