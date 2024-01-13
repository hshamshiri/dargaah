import { Grid } from "@mui/material";

const Item = ({ image }) => {
  return (
    <Grid>
      <img className="object-contain " src={image.url} />
    </Grid>
  );
};

export default Item;
