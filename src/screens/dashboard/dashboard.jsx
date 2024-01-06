import * as React from "react";
import Box from "@mui/material/Box";
import { Card, Container } from "@mui/material";
import MiniDrawer from "../../component/uiKit/Uidrawer/uiDrawer";

// -------
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import heatherMother from "../../images/headermother.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const DashedView = () => {
  return (
    <Paper variant="dashed" sx={{ backgroundColor: "red" }}>
      <Item />
    </Paper>
  );
};

const Dashboard = () => {
  return (
    <MiniDrawer>
      {/* content */}
      <Box width={"100%"}>
        {/* banner */}
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          backgroundColor={"red"}
        >
          <Grid xs={12} backgroundColor={"blue"}>
            <img src={heatherMother} />
          </Grid>
        </Grid>

        {/* search */}
        <Box sx={{ marginTop: 2 }}>
          <Grid
            container
            direction={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            }}
            alignItems={{
              xs: "end",
              sm: "end",
            }}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            backgroundColor={"red"}
          >
            <Grid xs={12} sm={12} md={3}>
              <Item>3</Item>
            </Grid>
            <Grid xs={12} sm={4} md={3}>
              <Item>2</Item>
            </Grid>
            <Grid xs={12} sm={8} md={6}>
              <Item>1</Item>
            </Grid>
          </Grid>
        </Box>

        {/* content */}
        <Grid
          container
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          backgroundColor={"red"}
          marginTop={5}
        >
          {/* left side */}
          <Grid
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            xs={12}
            sm={12}
            md={4}
            bgcolor={"orange"}
          >
            <Grid xs={12} sm={12} md={12}>
              <Box sx={{ border: 1 }}>hassan</Box>
            </Grid>
          </Grid>

          {/* right side */}
          <Grid container xs={12} sm={12} md={8} bgcolor={"gray"}>
            <Grid
              container
              display={"flex"}
              flexDirection={"column"}
              xs={12}
              rowGap={3}
            >
              <DashedView>asdfsdf3</DashedView>

              <DashedView> sadfsadfsad</DashedView>

              <DashedView>safd</DashedView>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MiniDrawer>
  );
};

// const icon = (
//   <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={5}>
//     hi
//   </Paper>
// );
// const arr = [icon, icon, icon];
// {arr.map((icon, i) => (
//     <UiSlide timeout={1000 * ((i + 1) / 2)}>{icon}</UiSlide>
//   ))}

export default Dashboard;
