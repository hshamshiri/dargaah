import React from "react";
import interfaceConfige from "../../uiConfige.json";
import { useTranslation } from "react-i18next";
import UiBreadcrumbs from "../../component/uiKit/uiBreadcrumbs/uiBreadcrumbs";
import SearchInputBase from "../../component/uiKit/uiSearchTextField/uiSearchTextField";
import { Box, Paper, Typography, Button } from "@mui/material";
import MiniDrawer from "../../component/uiKit/uiDrawer/uiDrawer";
import UiSlider from "../../component/uiKit/uiSlider/uislider";
import UiTopSlider from "../../component/uiKit/uiTopSlider/uiTopSlider";
import UiDashedBox from "../../component/uiKit/uiDashedBox/uidDashedBox";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
// -------
import Grid from "@mui/material/Unstable_Grid2";
import UiIcon from "../../component/uiKit/uiIcon/uiIcon";

const Dashboard = () => {
  const navigate = useNavigate();
  const [t] = useTranslation();

  return (
    <MiniDrawer buttonList={interfaceConfige?.drawerButtons?.buttons}>
      {/* content */}
      <Box width={"100%"}>
        {/* banner */}
        <UiTopSlider images={interfaceConfige?.topSlider?.images} />
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
              md: "center",
            }}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            display={"felx"}
            justifyContent={"center"}
          >
            <Grid xs={8} sm={6} md={3}>
              <SearchInputBase placeholder={t("dashboard.main.search")} />
            </Grid>
            <Grid container xs={6} sm={3} md={3}>
              <Grid
                xs={12}
                sm={12}
                md={8}
                position={"relative"}
                borderRadius={2}
                height={40}
                display={"flex"}
                alignItems={"center"}
                bgcolor={""}
                padding={0}
              >
                <UiIcon
                  iconName={"people"}
                  classes={{
                    width: "20%",
                    height: "100%",
                    backgroundColor: "base.main",
                    color: "white",
                    //borderRadius: 0,
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                />

                <Button
                  onClick={() => navigate("dashboardAdmin")}
                  sx={{
                    width: "80%",
                    height: "100%",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textAlign: "center",
                    display: "block",
                    direction: "rtl",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {t("dashboard.main.change")}
                </Button>
              </Grid>
            </Grid>
            <Grid xs={12} sm={8} md={6} display={"flex"} justifyContent={"end"}>
              <UiBreadcrumbs
                items={[
                  { label: t("dashboard.main.about"), link: "#" },
                  { label: t("dashboard.main.contact"), link: "#" },
                  { label: t("dashboard.main.specifications"), link: "#" },
                ]}
              />
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
          padding={1}
          marginTop={5}
        >
          {/* left side */}
          <Grid
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            paddingTop={2}
            xs={12}
            sm={12}
            md={4}
          >
            <Grid
              boxShadow={3}
              sx={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderRadius: 5,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  color: "white",
                  fontSize: 20,
                  fontWeight: 700,
                  background:
                    "linear-gradient(to right bottom, #430089, #82ffa1)",
                }}
              >
                {t("dashboard.main.journals")}
              </Typography>
              <UiSlider
                images={interfaceConfige?.journals?.images}
                label={interfaceConfige?.journals?.label}
              />
            </Grid>
          </Grid>

          {/* right side */}
          <Grid
            container
            xs={12}
            sm={12}
            md={8}
            display={"flex"}
            flexDirection={"column"}
            rowGap={5}
          >
            {interfaceConfige?.dashedBorderContainers?.dashBoxes.map(
              (DashedBox) => (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"end"}
                  //width={"100%"}
                  position={"relative"}
                  key={uuidv4()}
                  sx={{ marginTop: 1 }}
                >
                  <UiDashedBox
                    key={uuidv4()}
                    buttons={DashedBox.buttons}
                    label={DashedBox.label}
                  />
                </Box>
              )
            )}
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
//     <UiSlide timeout={1000 * ((i + 1) / 2)} key={i}>{icon}</UiSlide>
//   ))}

export default Dashboard;
