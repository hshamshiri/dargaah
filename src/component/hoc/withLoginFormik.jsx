import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import regexList from "../../utils/regex";
import { useTranslation } from "react-i18next";

const WithMaterialUI = (WrappedComponent) => {
  const FormikChecked = () => {
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
      onSubmit: (values) => {
        console.log("aaa", values);
      },
    });
    return <WrappedComponent formik={formik} onSubmit={formik.handleSubmit} />;
  };

  return FormikChecked;
};

export default WithMaterialUI;
