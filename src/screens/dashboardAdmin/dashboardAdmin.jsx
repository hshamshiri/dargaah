import React, { useState } from "react";
import interfaceConfige from "../../uiConfige.json";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography, Button, Stack } from "@mui/material";
import MiniDrawer from "../../component/uiKit/Uidrawer/uiDrawer";
import UiSlider from "../../component/uiKit/uiSlider/uislider";
import UiTopSlider from "../../component/uiKit/uiTopSlider/uiTopSlider";
import UiDashedBox from "../../component/uiKit/uiDashedBox/uidDashedBox";
import UiModal from "../../component/uiKit/uiModal/uiModal";
import WithMaterialUI from "../../component/hoc/withLoginFormik";
import { v4 as uuidv4 } from "uuid";
// -------
import Grid from "@mui/material/Unstable_Grid2";
import UiIcon from "../../component/uiKit/uiIcon/uiIcon";
import UiButton from "../../component/uiKit/uiButton/uiButton";
import UiInputText from "../../component/uiKit/uiInput/uiInput";
import addDashedBoxForm from "../../component/forms/addDashedBoxForm/addDashedBoxForm";
import AddDashedBoxForm from "../../component/forms/addDashedBoxForm/addDashedBoxForm";
import AddButtonOfDashedBox from "../../component/forms/addButtonDashedBox/addButtonOfDashedBoxForm";

const DashboardAdmin = ({ formik }) => {
  const [t] = useTranslation();
  const [interfaceUI, setInterfaceUI] = useState(interfaceConfige);
  const [activeModal, setActiveModal] = useState(false);
  const [activeAddDashedForm, setActiveDashedForm] = useState(false);
  const [activeAddButtonDashedForm, setActiveButtonDashedForm] =
    useState(false);
  const [chosenBoxId, setChosenBoxID] = useState(0);

  const toggleShowModal = () => setActiveModal(!activeModal);

  const handleForms = (type, id) => {
    setActiveModal(true);
    if (type === "dashedBox") {
      setActiveDashedForm(true);
      setActiveButtonDashedForm(false);
    }
    if (type === "buttonBox") {
      setActiveDashedForm(false);
      setActiveButtonDashedForm(true);
    }
  };

  const handleShowForm = () => {};
  // const handleAddBoxButton = (boxId) => {
  //   if (inputs["buttonName"] !== "") {
  //     let boxList = interfaceUI?.dashedBorderContainers?.dashBoxes;
  //     let currenBox = boxList.find((box) => box?.id === boxId);
  //     console.log("kk", currenBox);

  //     if (currenBox) {
  //       let repeatButtonName = currenBox?.buttons.filter(
  //         (el) => el?.label === inputs["boxName"]
  //       );
  //       if (repeatButtonName.length === 0) {
  //         currenBox.buttons.unshift({
  //           id: uuidv4(),
  //           label: inputs["boxName"],
  //           image: {
  //             id: 1,
  //             url: "https://my.medu.ir/assets/img/pages/student/icons/estelamshahrie.png",
  //           },
  //         });
  //         setInterfaceUI(interfaceUI);
  //       } else {
  //         console.log("repeated");
  //       }
  //     } else {
  //       //input required
  //     }

  //     toggleShowModal();
  //   }
  // };

  return (
    <MiniDrawer buttonList={interfaceUI?.drawerButtons?.buttons}>
      {/* add Box */}
      <UiModal activeModal={activeModal} toggleShowModal={toggleShowModal}>
        {activeAddDashedForm && (
          <AddDashedBoxForm
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            activeAddDashedForm={activeAddDashedForm}
          />
        )}

        {activeAddButtonDashedForm && (
          <AddButtonOfDashedBox
            interfaceUI={interfaceUI}
            setInterfaceUI={setInterfaceUI}
            toggleShowModal={toggleShowModal}
            activeAddButtonDashedForm={activeAddButtonDashedForm}
            boxId={chosenBoxId}
          />
        )}
      </UiModal>

      {/* content */}
      <Box width={"100%"}>
        {/* banner */}
        <UiTopSlider images={interfaceUI?.topSlider?.images} />
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
            rowGap={5}
          >
            <UiButton
              onclick={() => handleForms("dashedBox")}
              label={"ppp"}
            ></UiButton>
            {interfaceUI?.dashedBorderContainers?.dashBoxes.map((dashedBox) => (
              <Box key={uuidv4()} sx={{}}>
                <UiButton
                  sx={{ width: 100 }}
                  label={"add button"}
                  variant={"contained"}
                  onclick={() => handleForms("buttonBox", dashedBox?.id)}
                />
                <UiDashedBox
                  id={dashedBox?.id}
                  buttons={dashedBox?.buttons}
                  label={dashedBox?.label}
                />
              </Box>
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