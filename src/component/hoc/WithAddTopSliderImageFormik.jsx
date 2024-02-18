import React from "react";
import { useDispatch } from "react-redux";
import { addTopSliderImage } from "../../redux/uiConfigeReducer";
import { postRequest } from "../../utils/network/requsets/postRequest";
import { APIs } from "../../utils/network/apiClient";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify"


const WithAddTopSliderImageFormik = (WrappedComponent) => {

  const FormikChecked = (props) => {
    const [t] = useTranslation();
    const dispatch = useDispatch()

    const MAX_FILE_SIZE = 102400; //100KB
    const validFileExtensions = {
      image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
    };

    const validationSchema = yup.object({
      file: yup
        .mixed()
        .required("Required")
        .test("is-valid-type", "Not a valid image type", (value) =>
          isValidFileType(value && value?.name.toLowerCase(), "image")
        ),
      // .test(
      //   "is-valid-size",
      //   "Max allowed size is 100KB",
      //   (value) => value && value.size <= MAX_FILE_SIZE
      // )
      imageLink: yup
        .string()
        .min(2, t("helperText.short"))
        .max(30, t("helperText.long"))
        .required(t("helperText.requiredField")),
      // .test("Unique", t("helperText.duplicate"), (value) => {  return checkDuplicateLink(value);}),
    });

    function isValidFileType(fileName, fileType) {
      return (
        fileName &&
        validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
      );
    }

    const formik = useFormik({
      initialValues: {
        file: null,
        imageLink: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        postRequest(APIs.topSlider.uplode_image, values).then((response) => {
          if (response.data) {
            console.log(response.data)
            dispatch(addTopSliderImage(response.data))
            toast.success(t("helperText.successAdd"))
            props.toggleShowModal(false);
          }
          if (response.error.msg) {
            toast.error(response.error.msg + "\n" + response.error.status)

          }
        })
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

export default WithAddTopSliderImageFormik;
