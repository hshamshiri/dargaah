import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DeleteButton from "../../uiButton/deleteButton";

const Item = ({ item }) => {
  return (
    <Grid height={{ xs: 200, sm: 400, md: 400, lg: 500 }}>
      <Link to={item.link} target='_blank'>
        <LazyLoadImage
          loading='lazy'
          src={item?.image_url}
          style={{
            flex: 1,
            resizeMode: "contain",
            height: "100%",
            width: "100%",
          }}
        />
      </Link>
      <Box
        display={"flex"}
        position={"absolute"}
        zIndex={1}
        bottom={-40}
        left={40}
        padding={0}
      >
        {/* <DeleteButton /> */}
      </Box>
    </Grid>
  );
};

export default Item;
