import React, { useCallback, useEffect, useState } from "react";
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
import { Stack, Divider } from "@mui/material";
import JournalSlider from "../../component/uiKit/sliders/journal/journalSlider";
import BannerSlider from "../../component/uiKit/sliders/banner/bannerSlider";
import UiAdminDashedBox from "../../component/uiKit/uiAdminDashedBox/uiAdminDashedBox";
import UiModal from "../../component/uiKit/uiModal/uiModal";
import Grid from "@mui/material/Unstable_Grid2";
import AddNewboxButton from "../../component/uiKit/uiButton/addNewBoxButton.jsx";
//
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
//
import { getRequest } from "../../utils/network/requsets/getRequest";
import { APIs } from "../../utils/network/apiClient";
import { addTopSliderImage, addJournalImage, addDashBox } from "../../redux/uiConfigeReducer";
import BannerEditButtons from "../../component/uiKit/editButtons/bannerEditButtons/bannerEditButtons";
import JournalEditButtons from "../../component/uiKit/editButtons/journalEditButtons/journalEditButtons";





const ManagerModalForm = ({
  toggleShowModal,
  activeModal,
  selectedBox,
  selectedButton,
  chosenSlider,
  activeForms, }) => {
  return (
    <UiModal activeModal={activeModal} toggleShowModal={toggleShowModal}>

      {activeForms["dashedBox"] && (
        <AddDashedBoxForm
          toggleShowModal={toggleShowModal}
          boxInfo={selectedBox}
        />
      )}
      {activeForms["addButtonOfDashedBox"] && (
        <AddButtonOfDashedBox
          toggleShowModal={toggleShowModal}
          boxInfo={selectedBox}
          buttonInfo={selectedButton}
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
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [chosenSlider, setChosenSlider] = useState();
  const [activeForms, setActiveForms] = useState({
    dashedBox: false,
    addButtonOfDashedBox: false,
    addLeftImageSlider: false,
    addTopImageSlider: false,
  });



  const dispatch = useDispatch()
  const toggleShowModal = useCallback(() => setActiveModal(!activeModal), [activeModal])
  const dashBoxes = useSelector((state) => state.uiConfigeJson.dashBox_list);
  const journals = useSelector((state) => state?.uiConfigeJson?.journal_list);
  const banners = useSelector((state) => state?.uiConfigeJson?.topSlider_list)


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
    setSelectedBox(boxInfo);
    setSelectedButton(buttonInfo);
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
        selectedBox={selectedBox}
        selectedButton={selectedButton}
        chosenSlider={chosenSlider}
        activeForms={activeForms} />

      {/* banner */}
      <Stack spacing={2}>
        <BannerEditButtons handleForms={handleForms} />
        <Divider />
        <BannerSlider banners={banners} />
      </Stack>

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
        marginTop={0}
      >
        {/* left side */}
        <Grid
          columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          position={"relative"}
          xs={12}
          sm={12}
          md={4}
        >
          <JournalEditButtons handleForms={handleForms} />
          <JournalSlider journals={journals} />
        </Grid>

        {/* right side */}
        <Grid
          container
          xs={12}
          sm={12}
          md={8}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          rowGap={1}
          marginTop={7}
        >
          {/* <Divider>افزودن مجموعه</Divider> */}
          <AddNewboxButton onClick={() => handleForms("dashedBox")} />

          {dashBoxes && dashBoxes.map((dashBox, i) => (
            <UiAdminDashedBox
              key={uuidv4()}
              handleForms={handleForms}
              boxInfo={dashBox}
              hideLabel={true}
            />
          ))}
        </Grid>
      </Grid>

    </MiniDrawer>
  );
};



export default DashboardAdmin
