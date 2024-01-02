import * as React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import MiniDrawer from "../../component/uiKit/Uidrawer/uiDrawer";

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
      </Box>
    </Container>
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
