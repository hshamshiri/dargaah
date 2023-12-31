import { Box, Grid, Paper, Typography } from "@mui/material";
import UiButton from "../../uiKit/uiButton/uiButton";

const Item = ({ item }) => {
  return (
    <Grid
      height={{ xs: 200, sm: 400, md: "100%" }}
      sx={{
        backgroundColor: "transparent",
        //padding:
      }}
    >
      <img className="w-full h-full object-contain" src={item.src} />
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
    </Grid>
  );
};

export default Item;
