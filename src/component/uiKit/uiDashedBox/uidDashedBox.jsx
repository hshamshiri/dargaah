import DashedButton from "./dashButton";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { purple } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

const UiDashedBox = ({ buttons, label, hideLabel }) => {
  return (
    <Grid
      container
      minHeight={200}
      display={"flex"}
      position={"relative"}
      borderRadius={5}
      boxShadow={5}
      marginTop={5}
      border={`2px dashed ${purple[500]}`}
      backgroundColor={"white"}
      xs={12}
      sm={12}
      md={12}
    >
      <Box
        height={55}
        minWidth={150}
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
      <Box
        sx={{
          width: "100%",
          display: "grid",
          padding: 3,
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
          return <DashedButton key={uuidv4()} buttonDetalis={button} />;
        })}
      </Box>
    </Grid>
  );
};

export default UiDashedBox;
