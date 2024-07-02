import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../component/hooks/useAuth";
import { Box, Typography, Stack } from "@mui/material";
import NavigateButton from "../../../component/uiKit/uiButton/NavigateButton";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const { setLoginState } = useAuth();

  const handleClick = () => {
    localStorage.setItem("loginStatus", "logout");
    setLoginState("logout");
    navigate("/");
  };

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
        <Box width={300} height={300} padding={1}>
          <Typography>
            به وب سایت رسمی ما خوش آمدید. استفاده از این سایت تابع شرایط و
            مقرراتی است که در زیر اعلام می شود. لطفاً این شرایط و مقررات را قبل
            از استفاده از سایت به دقت مطالعه فرمایید. با استفاده، خرید، دسترسی
            یا دانلود مطالب از این وب سایت، عملاً با پذیرش شرایط و مقررات مطرح
            شده در این اطلاعیه حقوقی موافقت می کنید.
          </Typography>
          <Typography>
            این شرایط، تمام بازدیدهایی که در حال و آینده از وب سایت به عمل خواهد
            آمد را در بر می گیرد. در هر زمان ممکن است در این مقررات تجدید نظر
            شده و بروز شود.
          </Typography>
        </Box>
      </Stack>
      <Stack alignItems={"center"}>
        <NavigateButton
          onClick={() => handleClick()}
          label={"دیده شد"}
          iconName={"checkTick"}
        />
        <NavigateButton
          label={t("general.back")}
          iconName='back'
          onClick={() => {
            localStorage.setItem("loginStatus", "report");
            setLoginState("report");
          }}
        />
      </Stack>
    </Box>
  );
}
