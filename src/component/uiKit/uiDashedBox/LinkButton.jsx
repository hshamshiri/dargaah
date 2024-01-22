import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShakingView from "../uiTransitions/uiShake/uiShake";
import { Link } from "react-router-dom";

const LinkButton = ({ buttonDetalis }) => {
  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      //width={"100%"}
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"start"}
      padding={{ xs: 2, sm: 2, md: 1 }}
    >
      <Link to={buttonDetalis?.link || "#"}>
        <ShakingView>
          <img
            className="w-96 p-2 object-contain "
            style={{ maxWidth: 100, maxHeight: 150 }}
            value
            src={
              buttonDetalis?.image?.url
                ? buttonDetalis?.image?.url
                : URL.createObjectURL(buttonDetalis?.image?.localUrl)
            }
          />
          <Typography sx={{ width: "100%", height: "100%", marginTop: 1 }}>
            {buttonDetalis?.label}
          </Typography>
        </ShakingView>
      </Link>
    </Grid>
  );
};

export default LinkButton;
