import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShakingView from "../uiTransitions/uiShake/uiShake";
import { purple } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const UiDashedBox = ({ buttons, label }) => {
  return (
    <Grid
      container
      minHeight={150}
      display={"flex"}
      position={"relative"}
      borderRadius={5}
      boxShadow={3}
      marginTop={2}
      border={`2px dashed ${purple[500]}`}
      backgroundColor={"white"}
    >
      <Box
        height={55}
        minWidth={100}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
        padding={2}
        position={"absolute"}
        top={-50}
        right={0}
        zIndex={-1}
        sx={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        }}
      >
        {label}
      </Box>
      <Grid
        xs={12}
        sm={12}
        md={12}
        container
        height={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"end"}
        direction={"rtl"}
      >
        {buttons.map((button) => {
          return (
            <IconButton
              key={uuidv4()}
              label={button.label}
              image={button.image}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
const IconButton = ({ label, image }) => {
  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      //width={"100%"}
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"start"}
      padding={{ xs: 2, sm: 2, md: 1 }}
    >
      <ShakingView>
        <img
          className="w-96 p-2 object-contain "
          style={{ maxWidth: 100, maxHeight: 150 }}
          value
          src={image.url}
        />
        <Typography sx={{ width: "100%", height: "100%", marginTop: 1 }}>
          {label}
        </Typography>
      </ShakingView>
    </Grid>
  );
};

export default UiDashedBox;
