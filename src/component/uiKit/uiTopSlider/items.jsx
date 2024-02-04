import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

const Item = ({ item }) => {
  useEffect(() => {
    console.log("dddd");
  }, [item]);
  return (
    <Grid>
      <Link reloadDocument>
        <LazyLoadImage
          //onClick={() => deleteImage()}
          loading="lazy"
          src={item?.url ? item.url : URL.createObjectURL(item?.localUrl)}
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
