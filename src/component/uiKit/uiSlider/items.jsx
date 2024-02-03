import { Box, Grid, Paper, Typography } from "@mui/material";
import UiButton from "../uiButton/uiButton";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Item = ({ item }) => {
  return (
    <Grid
      height={{ xs: 200, sm: 400, md: "100%" }}
      sx={{
        backgroundColor: "transparent",
        //padding:
      }}
    >
      <Link reloadDocument>
        <LazyLoadImage
          loading="lazy"
          src={item?.url ? item.url : URL.createObjectURL(item?.localUrl)}
          style={{
            flex: 1,
            resizeMode: "contain",
            minHeight: 300,
            maxHeight: 400,
            width: "100%",
          }}
        />
        <Box
          display={"flex"}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
        >
          {/* <Typography width={"90%"} color={"white"}>
          {item.description}
        </Typography> */}
        </Box>
        {item.app && (
          <UiButton
            type="submit"
            label={item.appButtonTitle}
            onclick={<a href="#" />}
            variant="contained"
            iconName={"download"}
            iconType={"button"}
            sx={{
              borderColor: "white",
              border: 1,
              backgroundColor: "transparent",
            }}
          />
        )}
      </Link>
    </Grid>
  );
};

export default Item;
