import { Box, Grid, Paper, Typography } from "@mui/material";
import UiButton from "../uiButton/uiButton";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Item = ({ item }) => {

  return (
    <Grid
      height={{ xs: 200, sm: 400, md: 400, lg: 500 }}
    >
      <Link to={item.link} target="_blank" >
        <LazyLoadImage
          loading="lazy"
          src={item?.image_url}
          style={{
            flex: 1,
            resizeMode: "contain",
            height: "100%",
            width: "100%",
          }}
        />
      </Link>
    </Grid>
  );
};

export default Item;
