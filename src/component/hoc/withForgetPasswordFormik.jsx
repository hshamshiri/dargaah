import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import regexList from "../../utils/regex";
import { useTranslation } from "react-i18next";

export default function WithForgetPasswordFormik(WrappedComponent) {
    const FormikChecked = () => {
        const [t] = useTranslation();

        const validationSchema = yup.object({
            mail: yup
                .string()
                .required(t("login.form.mailRequired"))
                .matches(regexList.mail, t("login.form.mailInvalid"))
            ,
        });



        const formik = useFormik({
            initialValues: {
                mail: "",
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


