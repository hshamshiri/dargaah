import { Box, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLoginState } from "../../../redux/loginConfigeReducer";
import NavigateButton from "../../../component/uiKit/uiButton/NavigateButton";
import { useTranslation } from "react-i18next";
import BasicTable from "../../../component/uiKit/table/table";
import { useTheme } from "@emotion/react";

export default function UserReport() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useTheme();

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
        <BasicTable />
      </Stack>
      <NavigateButton
        label={t("general.next")}
        iconName='next'
        onClick={() => dispatch(setLoginState("term"))}
      />
    </Box>
  );
}
