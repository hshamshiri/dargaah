import LinkButton from "./LinkButton";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { purple } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

const UiDashedBox = ({ buttons, label, hideLabel }) => {
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
      xs={12}
      sm={12}
      md={12}
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
        display={hideLabel && "none"}
        sx={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        }}
      >
        {label}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, 1fr)",
            sm: "repeat(4, 4fr)",
            md: "repeat(5, 2fr)",
            lg: "repeat(6, 2fr)",
          },
          direction: "rtl",
        }}
      >
        {buttons.map((button) => {
          return <LinkButton key={uuidv4()} buttonDetalis={button} />;
        })}
      </Box>
    </Grid>
  );
};

export default UiDashedBox;
