import WithForgetPasswordFormik from "../../../component/hoc/withForgetPasswordFormik";
import { useTranslation } from "react-i18next";
import MailInput from "../../../component/uiKit/uiInput/mail/mailInput";
import { Stack, Link, Box } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../component/uiKit/uiButton/SubmitButton";
import NavigateButton from "../../../component/uiKit/uiButton/NavigateButton";
import { UseSelector, useDispatch } from "react-redux";
import { useAuth } from "../../../component/hooks/useAuth";
import Logo from "../../../component/uiKit/logo/logo";

const ForgetPasswordForm = ({ onSubmit, formik }) => {
  const navigate = useNavigate();
  const [t] = useTranslation();
  const { setLoginState } = useAuth();

  const submitAction = () => {
    toast("خوش آمدید");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Logo />
      <Stack
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginTop={5}
        spacing={3}
      >
        <MailInput formik={formik} />
        <Stack>
          <SubmitButton label={t("login.form.sendCode")} iconName='send' />
          <NavigateButton
            label={t("general.back")}
            iconName='back'
            onClick={() => setLoginState("logout")}
          />
        </Stack>
      </Stack>
    </form>
  );
};

export default WithForgetPasswordFormik(ForgetPasswordForm);
