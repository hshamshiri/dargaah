import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeLoginState } from "../../../redux/loginConfigeReducer";
import NavigateButton from "../../../component/uiKit/uiButton/NavigateButton";
import { useTranslation } from "react-i18next";
import BasicTable from "../../../component/uiKit/table/table";

export default function UserReport() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        paddingTop: 0,
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: 450,
      }}
    >
      <Typography fontSize={20} fontWeight={"bold"}>
        گزارش ورود و خروج
      </Typography>
      <BasicTable />
      <NavigateButton
        label={t("general.next")}
        iconName='next'
        onClick={() => dispatch(changeLoginState("term"))}
      />
    </Box>
  );
}
