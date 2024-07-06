import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import regexList from "../../utils/regex";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { postRequest } from "../../utils/network/requsets/postRequest";
import { APIs } from "../../utils/network/apiClient";
import { toast } from "react-toastify";
import { useAuth } from "../../component/hooks/useAuth";
import { getRequest } from "../../utils/network/requsets/getRequest";
import generateCaptchaToken from "../../utils/helper/captcha/generateRandomCaptchaToken";
import generateNewCaptchaUrl from "../../utils/helper/captcha/generateNewCaptchaUrl";
import { setCaptchaToken } from "../../redux/captchaTokenReducer";
import { setCaptchaUrl } from "../../redux/captchaUrlReducer";

const WithMaterialUI = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const dispatch = useDispatch();
    const { login } = useAuth();
    const [t] = useTranslation();
    const { captchaToken } = useSelector((state) => state?.captchaToken);

    const validationSchema = yup.object({
      username: yup
        .string()
        .required(t("login.form.usernameRequired"))
        .matches(
          regexList.usernameCharacterType,
          t("login.form.usernameInvalid")
        ),
      password: yup.string().required(t("login.form.passwordRequired")),
      //.matches(regexList.password, t("login.form.passwordInvalid")),
      captcha: yup.string().required(t("login.form.codeRequired")),
    });

    const loginRequest = (values) => {
      postRequest(
        APIs.login.login,
        { username: values.username, password: values.password },
        true
      ).then((response) => {
        if (response?.data?.access_token) {
          login(response.data.access_token);
        }
        if (response.error.msg) {
          toast.error("نام کاربری یا رمز عبور اشتباه است");
          values.captcha = "";
          refreshCaptchaUrl();
        }
      });
    };

    const refreshCaptchaUrl = async () => {
      const captchaToken = generateCaptchaToken();
      const newCaptchaUrl = generateNewCaptchaUrl(captchaToken);
      dispatch(setCaptchaToken(captchaToken));
      dispatch(setCaptchaUrl(newCaptchaUrl));
    };

    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
        captcha: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        getRequest(
          APIs.captcha.checkCaptcha + captchaToken + "/" + values.captcha,
          true
        ).then((response) => {
          if (response?.data) {
            if (response?.data === "correct") {
              loginRequest(values);
            } else {
              toast.error("کد امنیتی وارد شده اشتباه است");
              values.captcha = "";
              refreshCaptchaUrl();
              //document.getElementById("refreshToken").click();
            }
          }
          if (response.error.msg) {
            toast.error(response.error.msg);
          }
        });
      },
    });
    return (
      <WrappedComponent
        {...props}
        formik={formik}
        onSubmit={formik.handleSubmit}
      />
    );
  };

  return FormikChecked;
};

export default WithMaterialUI;
