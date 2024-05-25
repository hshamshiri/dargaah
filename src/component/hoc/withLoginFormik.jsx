import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import regexList from "../../utils/regex";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginState } from "../../redux/loginConfigeReducer";

const WithMaterialUI = (WrappedComponent) => {
  const FormikChecked = () => {
    const [t] = useTranslation();
    const dispatch = useDispatch();
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
      onSubmit: (values) => {
        dispatch(changeLoginState("report"));
      },
    });
    return <WrappedComponent formik={formik} onSubmit={formik.handleSubmit} />;
  };

  return FormikChecked;
};

export default WithMaterialUI;
