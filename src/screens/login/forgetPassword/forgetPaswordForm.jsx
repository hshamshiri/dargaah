
import WithForgetPasswordFormik from "../../../component/hoc/withForgetPasswordFormik";
import { useTranslation } from "react-i18next";
import UsernameInput from "../../../component/uiKit/uiInput/username/usernameInput";
import PasswordInput from "../../../component/uiKit/uiInput/password/passwordInput";
import CaptchaInput from "../../../component/uiKit/uiInput/captcha/captchaInput";
import { Stack, Link, Box } from "@mui/material";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import LoginButton from "../../../component/uiKit/uiButton/loginButton";


const ForgetPasswordForm = ({ onSubmit, formik }) => {
    const navigate = useNavigate()
    const [t] = useTranslation();

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
                <Stack spacing={2} sx={{ marginTop: 10 }}>
                    <UsernameInput formik={formik} />
                </Stack>
                <LoginButton label={t("login.form.sendCode")} />
                <LoginButton label={t("general.back")} />
            </Box>
        </form>

    );
};

export default WithForgetPasswordFormik(ForgetPasswordForm);
