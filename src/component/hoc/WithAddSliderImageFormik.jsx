import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const WithAddSliderImageFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
    const MAX_FILE_SIZE = 102400; //100KB

    const validationSchema = yup.object({
      file: yup
        .mixed()
        .required("Required")
        .test(
          "is-valid-size",
          t("helperText.max-size-50"),
          (value) => value && value.size <= MAX_FILE_SIZE
        ),

      imageLink: yup
        .string()
        .min(2, t("helperText.short"))
        .max(20, t("helperText.long"))
        .required(t("helperText.requiredField")),
      // .test("Unique", t("helperText.duplicate"), (value) => {  return checkDuplicateLink(value);}),
    });

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
        file: {},
        imageLink: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        let images = props?.interfaceUI?.journals?.images;
        if (images) {
          images.unshift({
            id: uuidv4(),
            link: values["imageLink"],
            localUrl: values?.file,
          });
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

export default WithAddSliderImageFormik;
