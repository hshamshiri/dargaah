import { Box, Grid, Paper, Typography } from "@mui/material";
import UiButton from "../uiButton/uiButton";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log(item?.localUrl);
  return (
    <Grid
      height={{ xs: 200, sm: 400, md: "100%" }}
      sx={{
        backgroundColor: "transparent",
        //padding:
      }}
    >
      <Link reloadDocument>
        <img
          className="w-full h-full object-contain"
          src={item?.url ? item.url : URL.createObjectURL(item?.localUrl)}
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
