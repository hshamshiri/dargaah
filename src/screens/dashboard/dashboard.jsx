import React, { useEffect } from "react";
import interfaceConfige from "../../uiConfige.json";
import { useTranslation } from "react-i18next";
import MiniDrawer from "../../component/uiKit/uiDrawer/uiDrawer";
import JournalSlider from "../../component/uiKit/sliders/journal/journalSlider";
import BannerSlider from "../../component/uiKit/sliders/banner/bannerSlider";
import UiDashedBox from "../../component/uiKit/uiDashedBox/uidDashedBox";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
// -------
import Grid from "@mui/material/Unstable_Grid2";
//
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
//
import { getRequest } from "../../utils/network/requsets/getRequest";
import { APIs } from "../../utils/network/apiClient";
import { addTopSliderImage, addJournalImage, addDashBox } from "../../redux/uiConfigeReducer";
import UiButton from "../../component/uiKit/uiButton/uiButton";
// import UiSlide from "../../component/uiKit/uiTransitions/uiSlide/uiSlide";


const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [t] = useTranslation();


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



  const dashBoxes = useSelector((state) => state.uiConfigeJson.dashBox_list);
  const journals = useSelector((state) => state?.uiConfigeJson?.journal_list);
  const banners = useSelector((state) => state?.uiConfigeJson?.topSlider_list)




  return (
    <MiniDrawer buttonList={interfaceConfige?.drawerButtons?.buttons}>

      <Grid
        marginBottom={2}
        container
      >
        <UiButton
          onclick={() => navigate("/dashboardAdmin")}
          sx={{ width: 200 }}
          label={t("dashboard.main.change")}
          variant={"contained"}
          iconName={"manager"}
          iconType={"button"}
        />
      </Grid>
      {/* banner */}
      <BannerSlider banners={banners} />

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
          <JournalSlider journals={journals} />
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
          rowGap={5}
        >

          {dashBoxes && dashBoxes.map((dashBox, i) => (
            <UiDashedBox
              key={uuidv4()}
              dashBoxInfo={dashBox}
              hideLabel={true}
            />
          )
          )}

        </Grid>
      </Grid>

    </MiniDrawer >
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
