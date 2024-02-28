import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addDashBox } from "../../redux/uiConfigeReducer";
import { APIs } from "../../utils/network/apiClient";
import { toast } from "react-toastify";
import { postRequest } from "../../utils/network/requsets/postRequest";
import { putRequest } from "../../utils/network/requsets/putRequest";


const WithAddDashedBoxFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
    const dispatch = useDispatch()
    const validationSchema = yup.object({
      boxName: yup
        .string()
        .min(2, t("helperText.short"))
        .max(20, t("helperText.long"))
        .required(t("helperText.requiredField"))
        .test("Unique", t("helperText.duplicate"), (value) => {
          return checkDuplicateName(value);
        }),
    });

    const checkDuplicateName = (value) => {
      // let boxNameList = props.interfaceUI?.dashedBorderContainers?.dashBoxes;
      // let duplicateName = boxNameList.filter((el) => el?.label === value);
      return true;
    };

    const formik = useFormik({
      initialValues: {
        boxName: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {

        if (props.boxInfo) {
          //update boxName
          putRequest(APIs.dashBox.update_dashbox + props?.boxInfo?.id, { "new_label": values.boxName }).then((response) => {
            handleReponse(response, true)
          })

        } else {
          //create new 
          postRequest(APIs.dashBox.new_dashBox, { label: values.boxName }).then((response) => {
            handleReponse(response)
          })
        }

        const handleReponse = (response, isUpdate) => {
          if (response.data) {
            dispatch(addDashBox(response.data))
            toast.success(t(`helperText.${isUpdate ? "successUpdate" : "successAdd"}`))
            props.toggleShowModal(false);
          }
          if (response.error.msg) {
            toast(response.error.msg)
          }
        }

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

export default WithAddDashedBoxFormik;
