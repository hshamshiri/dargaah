import { Box, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLoginState } from "../../../redux/loginConfigeReducer";
import NavigateButton from "../../../component/uiKit/uiButton/NavigateButton";
import { useTranslation } from "react-i18next";
import BasicTable from "../../../component/uiKit/table/table";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { getRequest } from "../../../utils/network/requsets/getRequest";
import { APIs } from "../../../utils/network/apiClient";
import { toast } from "react-toastify";

export default function LoginReport() {
  const [loginList, setLoginList] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    getRequest(APIs.user.log).then((res) => {
      if (res.data) {
        setLoginList(res.data);
      }
      if (res.error.msg) {
        toast.error(res.error.msg + "\n" + res.error.status);
      }
    });
  }, []);

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
      <Typography
        width={300}
        fontSize={20}
        marginBottom={2}
        fontWeight={"bold"}
        boxShadow={3}
        borderRadius={2}
        padding={1}
        sx={{ background: theme.palette.gradient.medium, color: "white" }}
      >
        {t("login.general.lastLogin")}
      </Typography>
      <Stack alignItems={"center"}>
        {loginList.length > 0 && <BasicTable items={loginList} />}
      </Stack>
      <NavigateButton
        label={t("general.next")}
        iconName='next'
        onClick={() => dispatch(setLoginState("term"))}
      />
    </Box>
  );
}
