import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import UiBreadcrumbs from "../../component/uiKit/uiBreadcrumbs/uiBreadcrumbs";
import SearchInputBase from "../../component/uiKit/uiSearchTextField/uiSearchTextField";
import estelam from "../../images/estelamshahrie.png";
import { Box, Paper, Typography, Button } from "@mui/material";
import MiniDrawer from "../../component/uiKit/Uidrawer/uiDrawer";
import ShakingView from "../../component/uiKit/uiTransitions/uiShake/uiShake";
import UiSlider from "../../component/uiKit/uiSlider/uislider";
// -------
import { purple } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import heatherMother from "../../images/headermother.png";
import UiIcon from "../../component/uiKit/uiIcon/uiIcon";

const arr = [1, 2, 3, 4, 5, 6, 7];
const IconButt = () => {
  return (
    <Grid xs={4} sm={3} md={2} container padding={{ xs: 2, sm: 2, md: 1 }}>
      <ShakingView>
        <img className="w-full p-3  object-contain " src={estelam} />
        <Typography sx={{ width: "100%" }}>
          درگاه اموزشی درگاه اموزشی{" "}
        </Typography>
      </ShakingView>
    </Grid>
  );
};

const DashedView = ({ title }) => {
  return (
    <Grid
      container
      display={"flex"}
      position={"relative"}
      borderRadius={5}
      boxShadow={3}
      marginTop={2}
      textTransform={"noun"}
      border={`2px dashed ${purple[500]}`}
      backgroundColor={"white"}
    >
      <Box
        height={55}
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
        {title}
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
        {arr.map(() => {
          return <IconButt />;
        })}
        {/* 
          <ShakingView sx={{ width: 100, height: 150, padding: 2 }}>
            <img src={estelam} />
            <Typography marginTop={1}>{"ادارات"}</Typography>
          </ShakingView>
          <Paper />
          <Paper elevation={3} /> */}
      </Grid>
    </Grid>
  );
};

const Dashboard = () => {
  const [t] = useTranslation();

  return (
    <MiniDrawer>
      {/* content */}
      <Box width={"100%"}>
        {/* banner */}
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12}>
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
                bgcolor={"orange"}
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
              <UiSlider />
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
            <DashedView title={t("dashboard.main.servieces")} />
            <DashedView title={t("dashboard.main.graduates")} />
            <DashedView title={t("dashboard.main.organizational")} />
            <DashedView title={t("dashboard.main.face")} />
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
