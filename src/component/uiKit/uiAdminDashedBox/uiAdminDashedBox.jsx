import AdminDashedButton from "./adminDashedButton";
import { Box, Tooltip, Button, Zoom } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { purple } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";
import UiButton from "../uiButton/uiButton";
import { useTranslation } from "react-i18next";
import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { useDispatch } from "react-redux";
import { APIs } from "../../../utils/network/apiClient";
import { addDashBox } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify"

const UiAdminDashedBox = ({
  boxInfo,
  handleForms,
  hideLabel,
}) => {

  const [t] = useTranslation();
  const dispatch = useDispatch()

  const deleteForm = () => {
    deleteRequest(APIs.dashBox.delete_dashbox + boxInfo.id).then((response) => {
      response.data && dispatch(addDashBox(response.data))
      response.error.msg && toast.error(response.error.msg + "\n" + response.error.status)
    })
  };
  return (
    <Grid
      container
      minHeight={200}
      display={"flex"}
      position={"relative"}
      borderRadius={5}
      boxShadow={5}
      marginTop={5}
      border={`2px dashed ${purple[500]}`}
      backgroundColor={"white"}
      xs={12}
      sm={12}
      md={12}
    >
      <Box
        height={55}
        minWidth={100}
        display={hideLabel ? "flex" : "none"}
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
        {boxInfo?.label}
      </Box>
      <Box display={"flex"} position={"absolute"} left={10} top={-50}>
        <Tooltip
          title={t("dashboard.main.deleteBox")}
          placement="top"
          arrow
          TransitionComponent={Zoom}
        >
          <Box>
            <UiButton
              onclick={deleteForm}
              //label={t("dashboard.main.addBtn")}
              variant={"contained"}
              iconName={"delete"}
              iconType={"button"}
              iconColor={"red"}
              sx={{
                width: 20,
                minWidth: 40,
                margin: 0.1,
                background: (theme) => theme.palette.gradient.main,
              }}
            />
          </Box>
        </Tooltip>
        <Tooltip title={t("dashboard.main.updateBoxName")} placement="top" arrow>
          <Box>
            <UiButton
              onclick={() => handleForms("dashedBox", boxInfo)}
              //label={t("dashboard.main.edit")}
              variant={"contained"}
              iconName={"editIcon"}
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
        <Tooltip title={t("dashboard.main.addBtn")} placement="top" arrow>
          <Box>
            <UiButton
              onclick={() => handleForms("addButtonOfDashedBox", boxInfo)}
              variant={"contained"}
              iconName={"add"}
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
      <Box
        sx={{
          width: "100%",
          display: "grid",
          padding: 3,
          gridTemplateColumns: {
            xs: "repeat(2, 2fr)",
            sm: "repeat(3, 2fr)",
            md: "repeat(4, 2fr)",
            lg: "repeat(5, 2fr)",
          },
          direction: "rtl",
        }}
      >
        {boxInfo && boxInfo?.buttons.map((button) => {
          return (
            <AdminDashedButton
              key={uuidv4()}
              boxInfo={boxInfo}
              buttonInfo={button}
              handleForms={handleForms}
            />
          );
        })}
      </Box>
    </Grid>
  );
};

export default UiAdminDashedBox;
