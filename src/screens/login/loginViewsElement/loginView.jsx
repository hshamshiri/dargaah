
import WithMaterialUI from "../../../component/hoc/withLoginFormik";
import { useTranslation } from "react-i18next";
import UsernameInput from "../../../component/uiKit/uiInput/username/usernameInput";
import PasswordInput from "../../../component/uiKit/uiInput/password/passwordInput";
import CaptchaInput from "../../../component/uiKit/uiInput/captcha/captchaInput";
import UiButton from "../../../component/uiKit/uiButton/uiButton";
import { Stack, Link, Box } from "@mui/material";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import LoginButton from "../../../component/uiKit/uiButton/loginButton";


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
        <Stack spacing={2} sx={{ marginTop: 3 }}>
          <UsernameInput formik={formik} />
          <PasswordInput formik={formik} />
          <CaptchaInput formik={formik} />
          <Link href="#" variant={"body1"} underline="always">
            {t("login.rightSection.forgetPass")}
          </Link>
        </Stack>
        <LoginButton />
      </Box>
    </form>

  );
};

export default WithMaterialUI(PasswordLoginView);
