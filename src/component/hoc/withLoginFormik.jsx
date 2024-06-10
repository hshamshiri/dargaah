import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import regexList from "../../utils/regex";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginState } from "../../redux/loginConfigeReducer";
import { postRequest } from "../../utils/network/requsets/postRequest";
import { APIs } from "../../utils/network/apiClient";
import { toast } from "react-toastify";
import { useAuth } from "../../component/hooks/useAuth";

const WithMaterialUI = (WrappedComponent) => {
  const FormikChecked = (props) => {
    console.log(props.tokenapi);
    const { login } = useAuth();
    const dispatch = useDispatch();
    const [t] = useTranslation();

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

    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
        captcha: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        if (values.username && values.password) {
          postRequest(
            APIs.login.login,
            { username: values.username, password: values.password },
            true
          ).then((response) => {
            if (response?.data?.access_token) {
              login(response.data.access_token);
            }
            if (response.error.msg) {
              toast.error(response.error.msg);
            }
          });
        }

        // dispatch(changeLoginState("report"));
        // Here you would usually send a request to your backend to authenticate the user
        // For the sake of this example, we're using a mock authentication
        // if (values.username === "user" && values.password === "pass") {
        // Replace with actual authentication logic
        //await AuthProvider.login(values.username);
        //   alert("ok");
        // } else {
        //   alert("Invalid username or password");
        //}
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
