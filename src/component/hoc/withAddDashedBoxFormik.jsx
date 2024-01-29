import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const WithAddDashedBoxFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
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
      let boxNameList = props.interfaceUI?.dashedBorderContainers?.dashBoxes;
      let duplicateName = boxNameList.filter((el) => el?.label === value);
      return duplicateName.length > 0 ? false : true;
    };

    const formik = useFormik({
      initialValues: {
        boxName: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        let obj = props.interfaceUI?.dashedBorderContainers?.dashBoxes;
        if (obj) {
          if (props.boxInfo) {
            //edit boxName
            let boxNameList =
              props.interfaceUI?.dashedBorderContainers?.dashBoxes;
            let findBox = boxNameList.find((el) => el?.id === props.boxInfo.id);
            findBox.label = values.boxName;
          } else {
            //add new
            obj.unshift({ id: uuidv4(), label: values.boxName, buttons: [] });
          }
          props.setInterfaceUI(props.interfaceUI);
          props.toggleShowModal();
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

export default WithAddDashedBoxFormik;
