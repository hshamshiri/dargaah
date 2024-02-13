import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const WithAddTopSliderImageFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
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
        .max(20, t("helperText.long"))
        .required(t("helperText.requiredField")),
      // .test("Unique", t("helperText.duplicate"), (value) => {  return checkDuplicateLink(value);}),
    });

    function isValidFileType(fileName, fileType) {
      return (
        fileName &&
        validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
      );
    }
    // const checkDuplicateLink = (value) => {
    //   let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
    //   let checkDuplicate = 0;
    //   for (const i in boxList) {
    //     const btnList = boxList[i]?.buttons;
    //     if (btnList.length > 0) {
    //       let duplicatedList = btnList.find((btn) => btn?.link === value);
    //       duplicatedList && checkDuplicate++;
    //     }
    //   }
    //   return checkDuplicate > 0 ? false : true;
    // };

    const formik = useFormik({
      initialValues: {
        file: null,
        imageLink: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        let images = props?.interfaceUI?.topSlider?.images;
        if (images) {
          props.interfaceUI.topSlider.images = [
            ...images,
            {
              id: uuidv4(),
              link: values["imageLink"],
              localUrl: values?.file,
            },
          ];
          console.log(images.length);

          props.setInterfaceUI(props?.interfaceUI);
          props.toggleShowModal(false);
        } else {
          //input required
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

export default WithAddTopSliderImageFormik;
