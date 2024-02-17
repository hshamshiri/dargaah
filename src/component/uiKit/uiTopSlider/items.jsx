import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

const Item = ({ item }) => {
  return (
    <Grid>
      <Link reloadDocument>
        <LazyLoadImage
          //onClick={() => deleteImage()}
          loading="lazy"
          src={item.image_url}
          style={{
            flex: 1,
            resizeMode: "contain",
            maxHeight: 250,
            minHeight: 150,
          }}
        />
      </Link>
    </Grid>
  );
};

export default Item;
