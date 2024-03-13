import React, { useEffect, useState } from "react";
import interfaceConfige from "../../uiConfige.json";
import { useTranslation } from "react-i18next";
import MiniDrawer from "../../component/uiKit/uiDrawer/uiDrawer";
import { v4 as uuidv4 } from "uuid";

import AddDashedBoxForm from "../../component/forms/addDashedBoxForm/addDashedBoxForm";
import AddButtonOfDashedBox from "../../component/forms/addButtonDashedBox/addButtonOfDashedBoxForm";
import AddSliderImageForm from "../../component/forms/addDashboardSliderImage/addSliderImageForm";
import AddTopSliderImageForm from "../../component/forms/addDashboardTopSliderImage/addTopSliderImageForm";
import EditSliderImagesForm from "../../component/forms/editSliderImages/editSliderImagesForm";
// -------
import { Box, Typography, Stack, Divider } from "@mui/material";
import UiSlider from "../../component/uiKit/uiSlider/uislider";
import UiTopSlider from "../../component/uiKit/uiTopSlider/uiTopSlider";
import UiAdminDashedBox from "../../component/uiKit/uiAdminDashedBox/uiAdminDashedBox";
import UiModal from "../../component/uiKit/uiModal/uiModal";
import Grid from "@mui/material/Unstable_Grid2";
import UiButton from "../../component/uiKit/uiButton/uiButton";
//
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
//
import { getRequest } from "../../utils/network/requsets/getRequest";
import { APIs } from "../../utils/network/apiClient";
import { addTopSliderImage, addJournalImage, addDashBox } from "../../redux/uiConfigeReducer";
import UiSlide from "../../component/uiKit/uiTransitions/uiSlide/uiSlide";

const ManagerModalForm = ({
  toggleShowModal,
  activeModal,
  chosenBoxInfo,
  chosenButton,
  chosenSlider,
  activeForms, }) => {

  return (
    <UiModal activeModal={activeModal} toggleShowModal={toggleShowModal}>
      {activeForms["dashedBox"] && (
        <AddDashedBoxForm
          toggleShowModal={toggleShowModal}
          boxInfo={chosenBoxInfo}
        />
      )}
      {activeForms["addButtonOfDashedBox"] && (
        <AddButtonOfDashedBox
          toggleShowModal={toggleShowModal}
          boxInfo={chosenBoxInfo}
          buttonInfo={chosenButton}
        />
      )}
      {activeForms["addLeftImageSlider"] && (
        <AddSliderImageForm
          toggleShowModal={toggleShowModal}
        />
      )}
      {activeForms["addTopImageSlider"] && (
        <AddTopSliderImageForm
          toggleShowModal={toggleShowModal}
        />
      )}
      {activeForms["editSliderImages"] && (
        <EditSliderImagesForm
          toggleShowModal={toggleShowModal}
          sliderName={chosenSlider}
        />
      )}
    </UiModal>
  )

}




const DashboardAdmin = () => {

  const [t] = useTranslation();
  const [interfaceUI] = useState(interfaceConfige);
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
  const dispatch = useDispatch()

  const dashBoxes = useSelector((state) => state.uiConfigeJson.dashBox_list);
  const journals = useSelector((state) => state.uiConfigeJson.journal_list);


  useEffect(() => {
    const getAllData = () => {
      getRequest(APIs.home).then((response) => {
        if (response.data) {
          response.data?.dashBoxes && dispatch(addDashBox(response.data?.dashBoxes))
          response.data?.top_slider && dispatch(addTopSliderImage(response.data?.top_slider))
          response.data?.journals && dispatch(addJournalImage(response.data?.journals))
        }
        if (response.error.msg) {
          toast.error(response.error.msg + "\n" + response.error.status)
        }
      })
    }
    getAllData()

  }, [dispatch]);



  const handleForms = (formName, boxInfo, buttonInfo, sliderName) => {
    setActiveModal(true);
    setChosenBoxInfo(boxInfo);
    setChosenButton(buttonInfo);
    setChosenSlider(sliderName);
    setActiveForms((prevState) => {
      const nextState = {};
      Object.keys(prevState).forEach(() => {
        nextState[formName] = true;
      });
      return nextState;
    });

  };


  return (
    <MiniDrawer buttonList={interfaceUI?.drawerButtons?.buttons || []}>
      <ManagerModalForm
        toggleShowModal={toggleShowModal}
        activeModal={activeModal}
        chosenBoxInfo={chosenBoxInfo}
        chosenButton={chosenButton}
        chosenSlider={chosenSlider}
        activeForms={activeForms} />

      {/* content */}
      <Box width={"100%"}>
        {/* banner */}
        <Stack spacing={2}>
          <Box width={"100%"} display={"flex"} justifyContent={"end"}>
            <UiButton
              onclick={() =>
                handleForms("editSliderImages", "", "", "topSlider")
              }
              variant={"contained"}
              iconName={"editIcon"}
              iconType={"button"}
              tooltipTitle={t("dashboard.main.editImages")}
              sx={{
                width: 20,
                minWidth: 40,
                margin: 0.1,
              }}
            />

            <UiButton
              onclick={() => handleForms("addTopImageSlider")}
              variant={"contained"}
              iconName={"addImage"}
              iconType={"button"}
              tooltipTitle={t("dashboard.main.addImage")}
              sx={{
                width: 20,
                minWidth: 40,
                margin: 0.1,
              }}
            />
          </Box>
          <Divider />
          <UiTopSlider />
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
                onclick={() => {
                  handleForms("editSliderImages", "", "", "leftSlider");
                }}
                //label={t("dashboard.main.edit")}
                variant={"contained"}
                iconName={"editIcon"}
                iconType={"button"}
                tooltipTitle={t("dashboard.main.editImages")}
                sx={{
                  width: 20,
                  minWidth: 40,
                  margin: 0.1,
                }}
              />


              <UiButton
                onclick={() => handleForms("addLeftImageSlider")}
                //label={t("dashboard.main.edit")}
                variant={"contained"}
                iconName={"addImage"}
                iconType={"button"}
                tooltipTitle={t("dashboard.main.addImage")}
                sx={{
                  width: 20,
                  minWidth: 40,
                  margin: 0.1,
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
                {journals?.title}
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
              />
            </Grid>

            <Divider sx={{ marginTop: 3 }}>مجموعه ها</Divider>

            {dashBoxes && dashBoxes.map((dashBox, i) => (
              <UiSlide key={uuidv4()} timeout={1000 * ((i + 1) / 2)}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"end"}
                  position={"relative"}
                  sx={{ marginTop: 3 }}
                >
                  <UiAdminDashedBox
                    handleForms={handleForms}
                    boxInfo={dashBox}
                    hideLabel={true}
                  />
                </Box>
              </UiSlide>
            ))}
          </Grid>
        </Grid>
      </Box>
    </MiniDrawer>
  );
};



export default DashboardAdmin
