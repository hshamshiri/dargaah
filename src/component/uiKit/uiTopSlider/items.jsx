import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Grid>
      <Link reloadDocument>
        <img
          src={item?.url ? item.url : URL.createObjectURL(item?.localUrl)}
          style={{
            flex: 1,
            resizeMode: "contain",
            maxHeight: 200,
            minHeight: 100,
          }}
        />
      </Link>
    </Grid>
  );
};

export default Item;
