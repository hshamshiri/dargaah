import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Item = ({ item }) => {
  return (
    <Grid>
      <Link to={item.link} target="_blank" >
        <LazyLoadImage
          loading="lazy"
          src={item?.image_url}
          style={{
            width: "100%",
            height: 200,
          }}
        />
      </Link>
    </Grid>
  );
};

export default Item;
