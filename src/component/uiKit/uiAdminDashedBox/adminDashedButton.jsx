import { Fragment } from "react";
import { Box, Typography, Tooltip, Zoom, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShakingView from "../uiTransitions/uiShake/uiShake";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import UiIcon from "../uiIcon/uiIcon";
import { useTranslation } from "react-i18next";

const AdminDashedButton = ({ handleForms, boxInfo, dashButtonInfo }) => {

  return (
    <Fragment>
      <ShakingView sx={{ marginTop: 3 }}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          position={"relative"}
          alignItems={"center"}
        >
          <EditButtons
            handleForms={handleForms}
            buttonDetalis={dashButtonInfo}
            boxInfo={boxInfo}
          />
          {/* <Link to={buttonDetalis?.link || "#"}> */}
          <Box
            display={"flex"}
            onClick={() =>
              handleForms("addButtonOfDashedBox", boxInfo, dashButtonInfo)
            }
          >
            <LazyLoadImage
              //loading="lazy"
              style={{
                maxWidth: "100%",
                maxHeight: 80,
                heightL: 80,
              }}
              src={
                dashButtonInfo?.image_url && dashButtonInfo?.image_url
              }
            />
          </Box>
          <Box>
            <Typography display={"flex"} margin={1}>
              {dashButtonInfo?.label}
            </Typography>
          </Box>

          {/* </Link> */}
        </Grid>
      </ShakingView>
    </Fragment>
  );
};

const EditButtons = ({ handleForms, boxInfo, dashButtonInfo }) => {
  const [t] = useTranslation();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      right={-5}
      top={10}
      position={"absolute"}
      onClick={() =>
        handleForms("addButtonOfDashedBox", boxInfo, dashButtonInfo)
      }
      borderRadius={5}
      sx={{ background: "linear-gradient(to right bottom, #430089, #82ffa1)" }}
    >
      <Tooltip
        title={t("dashboard.main.editBtn")}
        placement="top"
        arrow
        TransitionComponent={Zoom}
      >
        <Box>
          <UiIcon iconName={"editIcon"} iconColor={"white"} />
        </Box>
      </Tooltip>
      <Divider sx={{ backgroundColor: "white" }} />
      <Tooltip
        title={t("dashboard.main.deleteBtn")}
        placement="bottom"
        arrow
        TransitionComponent={Zoom}
      >
        <Box>
          <UiIcon iconName={"delete"} iconColor={"white"} />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default AdminDashedButton;
