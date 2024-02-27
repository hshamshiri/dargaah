import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import regexList from "../../utils/regex";
import { useTranslation } from "react-i18next";

const WithMaterialUI = (WrappedComponent) => {
  const FormikChecked = () => {
    const [t] = useTranslation();
    const validationSchema = yup.object({
      mobile: yup
        .string()
        .required(t("login.form.mobileRequired"))
        .matches(regexList.mobile, t("login.form.mobileInvalid")),
      captcha: yup
        .string()
        .required(t("login.form.codeRequired"))
      //boxName: yup.string().required(t("helperText.requiredField")),
    });

    const formik = useFormik({
      initialValues: {
        mobile: "",
        captcha: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        //alert(JSON.stringify(values, null, 2));
      },
    });
    return <WrappedComponent formik={formik} onSubmit={formik.handleSubmit} />;
  };

  return FormikChecked;
};

export default WithMaterialUI;
