import React, { useEffect, useState } from "react";
import interfaceConfige from "../../uiConfige.json";
import { useTranslation } from "react-i18next";
import MiniDrawer from "../../component/uiKit/uiDrawer/uiDrawer";
import WithMaterialUI from "../../component/hoc/withLoginFormik";
import { v4 as uuidv4 } from "uuid";

import AddDashedBoxForm from "../../component/forms/addDashedBoxForm/addDashedBoxForm";
import AddButtonOfDashedBox from "../../component/forms/addButtonDashedBox/addButtonOfDashedBoxForm";
import AddSliderImageForm from "../../component/forms/addDashboardSliderImage/addSliderImageForm";
import AddTopSliderImageForm from "../../component/forms/addDashboardTopSliderImage/addTopSliderImageForm";
import EditSliderImagesForm from "../../component/forms/editSliderImages/editSliderImagesForm";
// -------
import { Box, Paper, Typography, Button, Stack, Divider } from "@mui/material";
import UiSlider from "../../component/uiKit/uiSlider/uislider";
import UiTopSlider from "../../component/uiKit/uiTopSlider/uiTopSlider";
import UiDashedBox from "../../component/uiKit/uiDashedBox/uidDashedBox";
import UiAdminDashedBox from "../../component/uiKit/uiAdminDashedBox/uiAdminDashedBox";
import UiModal from "../../component/uiKit/uiModal/uiModal";
import Grid from "@mui/material/Unstable_Grid2";
import UiButton from "../../component/uiKit/uiButton/uiButton";
import { Tooltip } from "@mui/material";

const DashboardAdmin = ({ formik }) => {
  const [t] = useTranslation();
  const [interfaceUI, setInterfaceUI] = useState(interfaceConfige);
  const [activeModal, setActiveModal] = useState(false);
  const [chosenBoxInfo, setChosenBoxInfo] = useState(null);
  const [chosenButton, setChosenButton] = useState(null);
  const [chosenSlider, setChosenSlider] = useState();
  const [activeForms, setActiveForms] = useState({
    dashedBox: false,
    addButtonOfDashedBox: false,
    addLeftImageSlider: false,
    addTopImageSlider: false,
  });

  const toggleShowModal = () => setActiveModal(!activeModal);

  const handleForms = (formName, boxInfo, buttonInfo, sliderName) => {
    console.log(formName, boxInfo, buttonInfo, sliderName);
    setActiveModal(true);
    setActiveForms((prevState) => {
      const nextState = {};
      Object.keys(prevState).forEach(() => {
        nextState[formName] = true;
      });
      return nextState;
    });
    setChosenBoxInfo(boxInfo);
    setChosenButton(buttonInfo);
    setChosenSlider(sliderName);
  };

  return (
    <MiniDrawer buttonList={interfaceUI?.drawerButtons?.buttons || []}>
      {/* add Box */}
      <UiModal activeModal={activeModal} toggleShowModal={toggleShowModal}>
        {activeForms["dashedBox"] && (
          <AddDashedBoxForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            boxInfo={chosenBoxInfo}
          />
        )}

        {activeForms["addButtonOfDashedBox"] && (
          <AddButtonOfDashedBox
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            boxInfo={chosenBoxInfo}
            buttonInfo={chosenButton}
          />
        )}

        {activeForms["addLeftImageSlider"] && (
          <AddSliderImageForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
          />
        )}
        {activeForms["addTopImageSlider"] && (
          <AddTopSliderImageForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
          />
        )}

        {activeForms["editSliderImages"] && (
          <EditSliderImagesForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            sliderName={chosenSlider}
          />
        )}
      </UiModal>

      {/* content */}
      <Box width={"100%"}>
        {/* banner */}

        <Stack spacing={2}>
          <Box width={"100%"} display={"flex"} justifyContent={"end"}>
            <Tooltip title={t("dashboard.main.editImages")} placement="top">
              <Box>
                <UiButton
                  onclick={() =>
                    handleForms("editSliderImages", "", "", "topSlider")
                  }
                  //label={t("dashboard.main.edit")}
                  variant={"contained"}
                  iconName={"edit"}
                  iconType={"button"}
                  sx={{
                    width: 20,
                    minWidth: 40,
                    margin: 0.1,
                    background: (theme) => theme.palette.gradient.main,
                  }}
                />
              </Box>
            </Tooltip>
            <Tooltip title={t("dashboard.main.addImage")} placement="top">
              <Box>
                <UiButton
                  onclick={() => handleForms("addButtonOfDashedBox")}
                  //label={t("dashboard.main.edit")}
                  variant={"contained"}
                  iconName={"addImage"}
                  iconType={"button"}
                  sx={{
                    width: 20,
                    minWidth: 40,
                    margin: 0.1,
                    background: (theme) => theme.palette.gradient.main,
                  }}
                />
              </Box>
            </Tooltip>
          </Box>

          <Divider />
          <UiTopSlider
            images={interfaceUI?.topSlider?.images}
            sx={{ minWidth: 150, marginTop: 0 }}
          />
        </Stack>
        {/* search */}
        {/* <Box sx={{ marginTop: 2 }}>
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
            <Grid xs={8} sm={6} md={3}></Grid>
            <Grid container xs={6} sm={3} md={3}>
              <Grid xs={12} sm={12} md={8}></Grid>
            </Grid>
            <Grid
              xs={12}
              sm={8}
              md={6}
              display={"flex"}
              justifyContent={"end"}
            ></Grid>
          </Grid>
        </Box> */}

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
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            position={"relative"}
            xs={12}
            sm={12}
            md={4}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"end"}
              marginY={1}
            >
              <Tooltip title={t("dashboard.main.editImages")} placement="top">
                <Box>
                  <UiButton
                    onclick={() => {
                      handleForms("editSliderImages", "", "", "leftSlider");
                    }}
                    //label={t("dashboard.main.edit")}
                    variant={"contained"}
                    iconName={"edit"}
                    iconType={"button"}
                    sx={{
                      width: 20,
                      minWidth: 40,
                      margin: 0.1,
                      background: (theme) => theme.palette.gradient.main,
                    }}
                  />
                </Box>
              </Tooltip>
              <Tooltip title={t("dashboard.main.addImage")} placement="top">
                <Box>
                  <UiButton
                    onclick={() => handleForms("addLeftImageSlider")}
                    //label={t("dashboard.main.edit")}
                    variant={"contained"}
                    iconName={"addImage"}
                    iconType={"button"}
                    sx={{
                      width: 20,
                      minWidth: 40,
                      margin: 0.1,
                      background: (theme) => theme.palette.gradient.main,
                    }}
                  />
                </Box>
              </Tooltip>
            </Box>
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
                images={interfaceUI?.journals?.images}
                label={interfaceUI?.journals?.label}
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
            justifyContent={"start"}
            rowGap={1}
          >
            <Divider>افزودن مجموعه</Divider>
            <Grid display={"flex"} justifyContent={"center"} width={"100%"}>
              <UiButton
                onclick={() => handleForms("dashedBox")}
                label={t("dashboard.main.addBox")}
                variant={"contained"}
                iconName={"addFolder"}
                iconType={"button"}
                sx={{
                  background: (theme) => theme.palette.gradient.main,
                }}
              />
            </Grid>

            <Divider sx={{ marginTop: 3 }}>مجموعه ها</Divider>

            {interfaceUI?.dashedBorderContainers?.dashBoxes.map((dashedBox) => (
              <Grid
                display={"flex"}
                flexDirection={"column"}
                alignItems={"end"}
                //width={"100%"}
                position={"relative"}
                key={uuidv4()}
                sx={{ marginTop: 3 }}
              >
                <UiAdminDashedBox
                  interfaceUI={interfaceUI}
                  setInterfaceUI={setInterfaceUI}
                  handleForms={handleForms}
                  boxInfo={dashedBox}
                  buttons={dashedBox?.buttons}
                  label={dashedBox?.label}
                  hideLabel={true}
                />
              </Grid>
            ))}
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

export default WithMaterialUI(DashboardAdmin);
