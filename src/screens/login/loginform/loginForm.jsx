import { useEffect, useState, useMemo, useCallback } from "react";
import WithMaterialUI from "../../../component/hoc/withLoginFormik";
import { useTranslation } from "react-i18next";
import UsernameInput from "../../../component/uiKit/uiInput/username/usernameInput";
import PasswordInput from "../../../component/uiKit/uiInput/password/passwordInput";
import CaptchaInput from "../../../component/uiKit/uiInput/captcha/captchaInput";
import { Stack, Link, Box } from "@mui/material";
import LoginButton from "../../../component/uiKit/uiButton/SubmitButton";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../../component/uiKit/logo/logo";
import CircularProgress from "@mui/material/CircularProgress";
import RefreshCaptchaButton from "../../../component/uiKit/uiButton/refreshCaptchaButton";
import CountdownTimer from "../../../component/uiKit/timer/timer";
import generateCaptchaToken from "../../../utils/helper/captcha/generateRandomCaptchaToken";
import generateNewCaptchaUrl from "../../../utils/helper/captcha/generateNewCaptchaUrl";
import { setCaptchaToken } from "../../../redux/captchaTokenReducer";
import { setCaptchaUrl } from "../../../redux/captchaUrlReducer";
import { useAuth } from "../../../component/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ formik }) => {
  const dispatch = useDispatch();
  const { setLoginState, checkAuth, isAuth } = useAuth();
  const [t] = useTranslation();
  const [loading, setLoading] = useState(false);
  const { captchaUrl } = useSelector((state) => state.captchaUrl);
  const navigate = useNavigate();

  const createCaptchaUrl = async () => {
    const captchaToken = generateCaptchaToken();
    const newCaptchaUrl = generateNewCaptchaUrl(captchaToken);
    dispatch(setCaptchaToken(captchaToken));
    dispatch(setCaptchaUrl(newCaptchaUrl));
  };

  useEffect(() => {
    checkAuth();
    isAuth ? navigate("/") : createCaptchaUrl();
  }, []);

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

          <Box height={60} display={"flex"} justifyContent={"center"}>
            <Stack
              width={"20%"}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={1}
              padding={1}
            >
              <RefreshCaptchaButton
                id='refreshToken'
                onClick={() => createCaptchaUrl()}
              />
              {/* <CountdownTimer /> */}
            </Stack>
            <Box
              width={"80%"}
              height={"100%"}
              component={"img"}
              borderRadius={2}
              border={1}
              borderColor={"lightgray"}
              src={captchaUrl}
            />
          </Box>

          <CaptchaInput formik={formik} />
          <Link
            onClick={() => {
              localStorage.setItem("loginStatus", "forget");
              setLoginState("forget");
            }}
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
