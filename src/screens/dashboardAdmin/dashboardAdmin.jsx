import React, { useState } from "react";
import interfaceConfige from "../../uiConfige.json";
import { useTranslation } from "react-i18next";
import MiniDrawer from "../../component/uiKit/uiDrawer/uiDrawer";
import WithMaterialUI from "../../component/hoc/withLoginFormik";
import { v4 as uuidv4 } from "uuid";

import AddDashedBoxForm from "../../component/forms/addDashedBoxForm/addDashedBoxForm";
import AddButtonOfDashedBox from "../../component/forms/addButtonDashedBox/addButtonOfDashedBoxForm";
import AddSliderImageForm from "../../component/forms/addDashboardSliderImage/addSliderImageForm";
import AddTopSliderImageForm from "../../component/forms/addDashboardTopSliderImage/addTopSliderImageForm";
// -------
import { Box, Paper, Typography, Button, Stack, Divider } from "@mui/material";
import UiSlider from "../../component/uiKit/uiSlider/uislider";
import UiTopSlider from "../../component/uiKit/uiTopSlider/uiTopSlider";
import UiDashedBox from "../../component/uiKit/uiDashedBox/uidDashedBox";
import UiEditDashedBox from "../../component/uiKit/uiEditDashedBox/uiEditDashedBox";
import UiModal from "../../component/uiKit/uiModal/uiModal";
import Grid from "@mui/material/Unstable_Grid2";
import UiButton from "../../component/uiKit/uiButton/uiButton";
import EditDahedForm from "../../component/forms/editDashBox/editDashedForm";

const DashboardAdmin = ({ formik }) => {
  const [t] = useTranslation();
  const [interfaceUI, setInterfaceUI] = useState(interfaceConfige);
  const [activeModal, setActiveModal] = useState(false);
  const [activeAddDashedForm, setActiveAddDashedForm] = useState(false);
  const [activeEditDashedForm, setActiveEditDashedForm] = useState(false);
  const [activeAddButtonDashedForm, setActiveAddButtonDashedForm] =
    useState(false);
  const [activeAddSliderImageForm, setActiveAddSliderImageForm] =
    useState(false);
  const [activeAddTopSliderImageForm, setActiveAddTopSliderImageForm] =
    useState(false);
  const [chosenBoxId, setChosenBoxId] = useState(0);
  const [sideSlideImage, setSideSlideImage] = useState(null);

  const [activeEditBoxMode, setActiveEditBoxMode] = useState(true);

  const toggleShowModal = () => setActiveModal(!activeModal);

  const handleForms = (type, id) => {
    setActiveModal(true);
    let obj = {};
    obj[type] = true;
    setActiveAddDashedForm(obj["dashedBox"]);
    setActiveEditDashedForm(obj["editDashedBox"]);
    setActiveAddButtonDashedForm(obj["addButtonOfDashedBox"]);
    setActiveAddSliderImageForm(obj["leftImageSlider"]);
    setActiveAddTopSliderImageForm(obj["topImageSlider"]);
    id && setChosenBoxId(id);

    // if (type === "dashedBox") {
    //   setActiveAddDashedForm(true);
    //   setActiveAddButtonDashedForm(false);
    //   setActiveAddSliderImageForm(false);
    //   setActiveAddTopSliderImageForm(false);
    // }
    // if (type === "buttonBox") {
    //   setActiveAddDashedForm(false);
    //   setActiveAddButtonDashedForm(true);
    //   setActiveAddSliderImageForm(false);
    //   setActiveAddTopSliderImageForm(false);
    // }
    // if (type === "leftImageSlider") {
    //   setActiveAddDashedForm(false);
    //   setActiveAddButtonDashedForm(false);
    //   setActiveAddSliderImageForm(true);
    //   setActiveAddTopSliderImageForm(false);
    //   setChosenBoxId(id);
    // }
    // if (type === "topImageSlider") {
    //   setActiveDashedForm(false);
    //   setActiveAddButtonDashedForm(false);
    //   setActiveAddSliderImageForm(false);
    //   setActiveAddTopSliderImageForm(true);
    // }
  };

  return (
    <MiniDrawer buttonList={interfaceUI?.drawerButtons?.buttons}>
      {/* add Box */}
      <UiModal activeModal={activeModal} toggleShowModal={toggleShowModal}>
        {activeAddDashedForm && (
          <AddDashedBoxForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
          />
        )}

        {activeEditDashedForm && (
          <EditDahedForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            boxId={chosenBoxId}
          />
        )}

        {activeAddButtonDashedForm && (
          <AddButtonOfDashedBox
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            boxId={chosenBoxId}
          />
        )}

        {activeAddSliderImageForm && (
          <AddSliderImageForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            sideSlideImage={sideSlideImage}
            setSideSlideImage={setSideSlideImage}
          />
        )}
        {activeAddTopSliderImageForm && (
          <AddTopSliderImageForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            sideSlideImage={sideSlideImage}
            setSideSlideImage={setSideSlideImage}
          />
        )}
      </UiModal>

      {/* content */}
      <Box width={"100%"}>
        {/* banner */}

        <Stack spacing={2}>
          <Box width={"100%"} display={"flex"} justifyContent={"end"}>
            <UiButton
              onclick={() => handleForms("topImageSlider")}
              label={t("dashboard.main.addImage")}
              variant={"contained"}
              iconName={"addImage"}
              iconType={"button"}
              sx={{
                width: 150,
                background: (theme) => theme.palette.gradient.main,
              }}
            />
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
              <UiButton
                onclick={() => handleForms("leftImageSlider")}
                label={t("dashboard.main.addImage")}
                variant={"contained"}
                iconName={"addImage"}
                iconType={"button"}
                sx={{
                  width: 150,
                  right: 10,
                  background: (theme) => theme.palette.gradient.main,
                }}
              />
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
            justifyContent={"end"}
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
                {activeEditBoxMode ? (
                  <UiEditDashedBox
                    interfaceUI={interfaceUI}
                    setInterfaceUI={setInterfaceUI}
                    handleForms={handleForms}
                    boxId={dashedBox?.id}
                    buttons={dashedBox?.buttons}
                    label={dashedBox?.label}
                    hideLabel={true}
                  />
                ) : (
                  <UiDashedBox
                    id={dashedBox?.id}
                    buttons={dashedBox?.buttons}
                    label={dashedBox?.label}
                    hideLabel={true}
                  />
                )}
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
