import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShakingView from "../uiTransitions/uiShake/uiShake";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const AdminDashedButton = ({ buttonDetalis }) => {
  return (
    <Fragment>
      <ShakingView sx={{ margin: 0.2 }}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* <Link to={buttonDetalis?.link || "#"}> */}

          <Box display={"flex"}>
            <img
              style={{
                maxWidth: "100%",
                maxHeight: 80,
                heightL: 80,
              }}
              src={
                buttonDetalis?.image?.url
                  ? buttonDetalis?.image?.url
                  : URL.createObjectURL(buttonDetalis?.image?.localUrl)
              }
            />
          </Box>
          <Box>
            <Typography display={"flex"} margin={1}>
              {buttonDetalis?.label}
            </Typography>
          </Box>
          {/* </Link> */}
        </Grid>
      </ShakingView>
    </Fragment>
  );
};

export default AdminDashedButton;
