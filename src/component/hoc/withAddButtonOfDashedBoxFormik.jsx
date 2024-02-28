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

const withAddButtonOfDashedBoxFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
    const dispatch = useDispatch()
    const MAX_FILE_SIZE = 102400; //100KB
    const validationSchema = yup.object({
      btnName: yup
        .string()
        .min(2, t("helperText.short"))
        .max(25, t("helperText.long"))
        .required(t("helperText.requiredField"))
        .test("Unique", t("helperText.duplicate"), (value) => {
          return checkDuplicateName(value);
        }),
      btnLink: yup
        .string()
        .min(2, t("helperText.short"))
        .max(30, t("helperText.long"))
        .required(t("helperText.requiredField"))
        .test("Unique", t("helperText.duplicate"), (value) => {
          return checkDuplicateLink(value);
        }),
      file: yup
        .mixed()
        .required("Required")
        .test("is-valid-size", t("helperText.max-size-50"), (value) =>
          props?.buttonInfo?.image_url ? true : value && value.size <= MAX_FILE_SIZE
        ),
    });

    const checkDuplicateName = (value) => {
      return true
      // let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
      // let currenBox = boxList.find((box) => box?.id === props.boxInfo.id);
      // let btnNameList = currenBox?.buttons;
      // let duplicateName = btnNameList?.filter((el) => {
      //   if (props?.buttonInfo) {
      //     return el?.id !== props?.buttonInfo?.id && el?.label === value;
      //   } else {
      //     return el?.label === value;
      //   }
      // });
      // return duplicateName?.length > 0 ? false : true;
    };
    const checkDuplicateLink = (value) => {
      return true
      // let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
      // let currenBox = boxList.find((box) => box?.id === props.boxInfo.id);
      // let btnNameList = currenBox?.buttons;
      // let duplicateName = btnNameList?.filter((el) => {
      //   if (props?.buttonInfo) {
      //     return el?.id !== props?.buttonInfo?.id && el?.link === value;
      //   } else {
      //     return el?.link === value;
      //   }
      // });
      // return duplicateName?.length > 0 ? false : true;


    };

    const formik = useFormik({
      initialValues: {
        btnName: props?.buttonInfo ? props?.buttonInfo?.label : "",
        btnLink: props?.buttonInfo ? props?.buttonInfo?.link : "",
        file: null,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        if (props.buttonInfo) {
          //update boxName
          putRequest(APIs.dashButton.update_button + props?.boxInfo?.id + `/${props.buttonInfo?.id}`, { file: values.file, label: values.btnName, link: values.btnLink }, true).then((response) => {
            handleReponse(response, true)
          })
        } else {
          postRequest(APIs.dashButton.new_dashbutton + props?.boxInfo?.id, { file: values.file, label: values.btnName, link: values.btnLink }, true).then((response) => {
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

export default withAddButtonOfDashedBoxFormik;
