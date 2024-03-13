

//import { Link } from "react-router-dom";
import UiIcon from "../uiIcon/uiIcon";
import { useTranslation } from "react-i18next";
import { Box, Divider, useTheme } from "@mui/material";
import { APIs } from "../../../utils/network/apiClient";
import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { useDispatch } from "react-redux";
import { addDashBox } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify"
import UiTooltip from "../uiTooltip/uiTooltip"

const OptionButtons = ({ handleForms, boxInfo, buttonInfo }) => {
  const [t] = useTranslation();
  const theme = useTheme("theme")
  const dispatch = useDispatch()

  const remove = () => {
    deleteRequest(APIs.dashButton.delete_button + boxInfo?.id + `/${buttonInfo.id}`).then(response => {
      if (response.data) {
        dispatch(addDashBox(response.data))
        toast(t("helperText.successDelete"))
      }
      if (response.error.msg) {
        toast(response.error.msg)
      }
    })

  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      right={-5}
      top={10}
      position={"absolute"}

    >
      <UiTooltip
        title={t("dashboard.main.editBtn")}
        placement="top"
      >
        <Box
          sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, background: theme.palette.gradient.light, }}
          onClick={(e) => {
            handleForms("addButtonOfDashedBox", boxInfo, buttonInfo)
          }
          }
        >
          <UiIcon iconName={"editIcon"} iconColor={"white"} />
        </Box>
      </UiTooltip>

      <Divider sx={{ backgroundColor: "white" }} />

      <UiTooltip
        title={t("dashboard.main.deleteBtn")}
        placement="bottom"
      >
        <Box
          sx={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, background: theme.palette.gradient.red, }}
          onClick={(e) => {
            remove()
          }}>
          <UiIcon iconName={"delete"} iconColor={"white"} />
        </Box>
      </UiTooltip>
    </Box>
  );
};



export default OptionButtons