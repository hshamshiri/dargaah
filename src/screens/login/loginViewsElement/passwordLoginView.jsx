
import WithMaterialUI from "../../../component/hoc/withLoginFormik";
import { useTranslation } from "react-i18next";
import UiMobileInput from "../../../component/uiKit/uiInput/mobile/uiMobileInput";
import UiCaptchaInput from "../../../component/uiKit/uiInput/captcha/uiCaptchaInput";
import UiButton from "../../../component/uiKit/uiButton/uiButton";
import { Stack, Link, Box } from "@mui/material";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';


const PasswordLoginView = ({ onSubmit, formik }) => {
  const navigate = useNavigate()
  const [t] = useTranslation();
  const theme = useTheme()

  const submitAction = () => {
    toast("خوش آمدید")
    navigate("/dashboard")
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={4} sx={{ marginTop: 3 }}>
          <UiMobileInput formik={formik} />
          <UiCaptchaInput formik={formik} />
          <Link href="#" variant={"body1"} underline="always">
            {t("login.rightSection.privacy")}
          </Link>
        </Stack>
        <UiButton
          type="submit"
          label={t("login.form.sendCode")}
          onclick={submitAction}
          variant="contained"
          iconType={"button"}
          iconName={"send"}
          sx={{ width: 200, marginTop: 5, background: theme.palette.gradient.medium }}
        />
      </Box>
    </form>

  );
};

export default WithMaterialUI(PasswordLoginView);
