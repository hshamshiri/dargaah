

import { Link } from "react-router-dom";
import UiIcon from "../uiIcon/uiIcon";
import { useTranslation } from "react-i18next";
import { Box, Tooltip, Zoom, Divider, useTheme } from "@mui/material";
import { APIs } from "../../../utils/network/apiClient";
import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { useDispatch } from "react-redux";
import { addDashBox } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify"

const OptionButtons = ({ handleForms, boxInfo, buttonInfo }) => {
  console.log(APIs.dashButton.delete_button + boxInfo?.id + `/${buttonInfo.id}`)
  const [t] = useTranslation();
  const theme = useTheme("theme")
  const dispatch = useDispatch()

  const remove = () => {
    deleteRequest(APIs.dashButton.delete_button + boxInfo?.id + `/${buttonInfo.id}`).then(response => {
      console.log(response)
      if (response.data) {
        dispatch(addDashBox, response?.data)
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
      <Tooltip
        title={t("dashboard.main.editBtn")}
        placement="top"
        arrow
        TransitionComponent={Zoom}
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
      </Tooltip>
      <Divider sx={{ backgroundColor: "white" }} />
      <Tooltip
        title={t("dashboard.main.deleteBtn")}
        placement="bottom"
        arrow
        TransitionComponent={Zoom}
      >
        <Box
          sx={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, background: theme.palette.gradient.red, }}
          onClick={(e) => {
            remove()
          }}>
          <UiIcon iconName={"delete"} iconColor={"white"} />
        </Box>
      </Tooltip>
    </Box>
  );
};



export default OptionButtons