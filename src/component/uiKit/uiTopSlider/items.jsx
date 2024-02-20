import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Item = ({ item }) => {

  return (
    <Grid>
      <Link to={item.link}>
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
