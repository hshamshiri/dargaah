import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Item = ({ item }) => {

  return (
    <Grid>
      <Link to={item.link} target="_blank" >
        <LazyLoadImage
          //onClick={() => deleteImage()}
          loading="lazy"
          src={item?.image_url}
          style={{

            //resizeMode: "contain",
            maxHeight: 500,
            minHeight: 200,
          }}
        />
      </Link>
    </Grid>
  );
};

export default Item;
