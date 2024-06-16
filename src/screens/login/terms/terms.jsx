import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLoginState } from "../../../redux/loginConfigeReducer";
import { Box, Typography, Stack } from "@mui/material";
import NavigateButton from "../../../component/uiKit/uiButton/NavigateButton";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

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
      <Stack alignItems={"center"}>
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
          {t("login.form.rules")}
        </Typography>
        <Box width={"80%"} height={300} padding={1}>
          {
            "این پیام جهت اطلاع شما می باشد &nbsp این پیام جهت اطلاع شما می باشد"
          }
        </Box>
      </Stack>
      <Stack alignItems={"center"}>
        <NavigateButton
          onClick={() => navigate("dashboard")}
          label={"دیده شد"}
          iconName={"checkTick"}
        />
        <NavigateButton
          label={t("general.back")}
          iconName='back'
          onClick={() => dispatch(setLoginState("report"))}
        />
      </Stack>
    </Box>
  );
}
