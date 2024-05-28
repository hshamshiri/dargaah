import WithMaterialUI from "../../../component/hoc/withLoginFormik";
import { useTranslation } from "react-i18next";
import UsernameInput from "../../../component/uiKit/uiInput/username/usernameInput";
import PasswordInput from "../../../component/uiKit/uiInput/password/passwordInput";
import CaptchaInput from "../../../component/uiKit/uiInput/captcha/captchaInput";
import { Stack, Link, Box } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoginButton from "../../../component/uiKit/uiButton/SubmitButton";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginState } from "../../../redux/loginConfigeReducer";
import Logo from "../../../component/uiKit/logo/logo";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

const LoginForm = ({ onSubmit, formik }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const [loading, setLoading] = useState(false);

  const submitAction = () => {
    toast("خوش آمدید");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Logo />

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        {loading && <CircularProgress />}
        <Stack spacing={2} sx={{ marginTop: 3 }}>
          <UsernameInput formik={formik} />
          <PasswordInput formik={formik} />
          <CaptchaInput formik={formik} />
          <Link
            onClick={() => dispatch(changeLoginState("forget"))}
            sx={{ cursor: "pointer" }}
            variant={"body1"}
            underline='hover'
          >
            {t("login.rightSection.forgetPass")}
          </Link>
        </Stack>
        <LoginButton label={t("login.form.enter")} iconName={"send"} />
      </Box>
    </form>
  );
};

export default WithMaterialUI(LoginForm);
