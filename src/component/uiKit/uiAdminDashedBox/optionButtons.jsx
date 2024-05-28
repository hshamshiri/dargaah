//import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { APIs } from "../../../utils/network/apiClient";
import { deleteRequest } from "../../../utils/network/requsets/deleteRequest";
import { useDispatch } from "react-redux";
import { addDashBox } from "../../../redux/uiConfigeReducer";
import { toast } from "react-toastify";
import DeleteButton from "../uiButton/deleteButton";
import EditButton from "../uiButton/editButton";

const OptionButtons = ({ handleForms, boxInfo, buttonInfo }) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const remove = () => {
    deleteRequest(
      APIs.dashButton.delete_button + boxInfo?.id + `/${buttonInfo.id}`
    ).then((response) => {
      if (response.data) {
        dispatch(addDashBox(response.data));
        toast(t("helperText.successDelete"));
      }
      if (response.error.msg) {
        toast(response.error.msg);
      }
    });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      paddingLeft={1}
    >
      <EditButton
        hover={false}
        toolTipPlacement={"bottom"}
        onClick={(e) => {
          handleForms("addButtonOfDashedBox", boxInfo, buttonInfo);
        }}
      />
      <DeleteButton
        hover={false}
        toolTipPlacement={"bottom"}
        onClick={() => remove()}
      />
    </Box>
  );
};

export default OptionButtons;
