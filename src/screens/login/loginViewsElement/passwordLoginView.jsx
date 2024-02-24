import { useState } from "react";
import WithMaterialUI from "../../../component/hoc/withLoginFormik";
import { useTranslation } from "react-i18next";
import UiMobileInput from "../../../component/uiKit/uiInput/mobile/uiMobileInput";
import UiCaptchaInput from "../../../component/uiKit/uiInput/captcha/uiCaptchaInput";
import UiButton from "../../../component/uiKit/uiButton/uiButton";
import { Container, Stack, Link, useTheme } from "@mui/material";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";


const PasswordLoginView = ({ onSubmit, formik }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const [t] = useTranslation();


  const submitAction = () => {
    toast("خوش آمدید")
    navigate("/dashboard")
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
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
          sx={{ marginTop: 10, background: (theme) => theme.palette.gradient.dark }}
        />
      </Container>
    </form>

  );
};

export default WithMaterialUI(PasswordLoginView);
