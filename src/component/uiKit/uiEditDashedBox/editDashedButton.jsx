import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShakingView from "../uiTransitions/uiShake/uiShake";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const editDashedButton = ({ buttonDetalis }) => {
  return (
    <Fragment>
      <ShakingView>
        <Grid container justifyContent={"center"} margin={1}>
          {/* <Link to={buttonDetalis?.link || "#"}> */}

          <Box sx={{ width: { xs: "50%", sm: "50%", md: "70%", lg: "60%" } }}>
            <img
              style={{
                width: "100%",
                resize: "contain",
              }}
              src={
                buttonDetalis?.image?.url
                  ? buttonDetalis?.image?.url
                  : URL.createObjectURL(buttonDetalis?.image?.localUrl)
              }
            />
          </Box>
          <Typography sx={{ width: "100%" }}>{buttonDetalis?.label}</Typography>
          {/* </Link> */}
        </Grid>
      </ShakingView>
    </Fragment>
  );
};

export default editDashedButton;
