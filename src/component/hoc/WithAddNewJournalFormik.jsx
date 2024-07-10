import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addDashBox } from "../../redux/uiConfigeReducer";
import { APIs } from "../../utils/network/apiClient";
import { toast } from "react-toastify";
import { postRequest } from "../../utils/network/requsets/postRequest";

const WithAddNewJournalFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const validationSchema = yup.object({
      journalName: yup
        .string()
        .min(2, t("helperText.short"))
        .max(20, t("helperText.long"))
        .required(t("helperText.requiredField"))
        .test("Unique", t("helperText.duplicate"), (value) => {
          return checkDuplicateName(value);
        }),
    });

    const checkDuplicateName = (value) => {
      return true;
    };

    const formik = useFormik({
      initialValues: {
        journalName: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        postRequest(APIs.journal.add_journal, {
          title: values.journalName,
        }).then((response) => {
          handleReponse(response);
        });

        const handleReponse = (response) => {
          if (response.data) {
            dispatch(addDashBox(response.data));
            toast.success(t(`helperText.${"successAdd"}`));
            props.toggleShowModal(false);
          }
          if (response.error.msg) {
            toast(response.error.msg);
          }
        };
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

export default WithAddNewJournalFormik;
