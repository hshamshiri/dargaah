import { useEffect, useState, useMemo, useCallback } from "react";
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
import { getCaptcha } from "../../../utils/network/requsets/getCaptcha";
import { APIs, BASE_URL } from "../../../utils/network/apiClient";
import RefreshCaptchaButton from "../../../component/uiKit/uiButton/refreshCaptchaButton";
import CountdownTimer from "../../../component/uiKit/timer/timer";
import generateCaptchaToken from "../../../utils/helper/generateRandomCaptchaToken";
import generateNewCaptchaUrl from "../../../utils/helper/generateNewCaptchaUrl";
import { setCaptchaToken } from "../../../redux/captchaTokenReducer";

const LoginForm = ({ onSubmit, formik }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [loading, setLoading] = useState(false);
  const [captchaUrl, setCaptchaUrl] = useState();

  const getCaptchaUrl = () => {
    const captchaToken = generateCaptchaToken();
    dispatch(setCaptchaToken(captchaToken));
    const captchaUrl = generateNewCaptchaUrl(captchaToken);
    setCaptchaUrl(captchaUrl);
  };

  useEffect(() => {
    getCaptchaUrl();
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
              <RefreshCaptchaButton onClick={() => getCaptchaUrl()} />
              {/* <CountdownTimer /> */}
            </Stack>
            <Box
              width={"80%"}
              height={"100%"}
              component={"img"}
              borderRadius={1}
              border={1}
              borderColor={"lightgray"}
              src={captchaUrl}
            />
          </Box>

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
