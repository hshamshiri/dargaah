import { useState } from "react";
import WithMaterialUI from "../../../component/hoc/withLoginFormik";
import { useTranslation } from "react-i18next";
import UiMobileInput from "../../../component/uiKit/uiInput/mobile/uiMobileInput";
import UiCaptchaInput from "../../../component/uiKit/uiInput/captcha/uiCaptchaInput";
import UiButton from "../../../component/uiKit/uiButton/uiButton";
import { Container, Stack, Typography, Link } from "@mui/material";


const PasswordLoginView = ({ onSubmit, formik }) => {
  const [phone, setPhone] = useState(0);
  const [code, setCode] = useState("");
  const [t] = useTranslation();

  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const submitAction = () => {
    console.log("suuubmit");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container >
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
          sx={{ marginTop: 10, }}
        />

      </Container>


    </form>

  );
};

export default WithMaterialUI(PasswordLoginView);
