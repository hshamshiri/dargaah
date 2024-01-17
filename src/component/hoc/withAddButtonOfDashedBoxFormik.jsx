import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const withAddButtonOfDashedBoxFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
    const validationSchema = yup.object({
      btnName: yup
        .string()
        .min(2, t("helperText.short"))
        .max(15, t("helperText.long"))
        .required(t("helperText.requiredField"))
        .test("Unique", t("helperText.duplicate"), (value) => {
          return checkDuplicateName(value);
        }),
      btnLink: yup
        .string()
        .min(2, "Too Short!")
        .max(30, "Too Long!")
        .required(t("helperText.requiredField"))
        .test("Unique", t("helperText.duplicate"), (value) => {
          return checkDuplicateLink(value);
        }),
    });

    const checkDuplicateName = (value) => {
      let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
      let currenBox = boxList.find((box) => box?.id === props.boxId);
      let btnNameList = currenBox?.buttons;
      let duplicateName = btnNameList?.filter((el) => el?.label === value);
      return duplicateName?.length > 0 ? false : true;
    };
    const checkDuplicateLink = (value) => {
      let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
      let checkDuplicate = 0;
      for (const i in boxList) {
        const btnList = boxList[i]?.buttons;
        if (btnList.length > 0) {
          let duplicatedList = btnList.find((btn) => btn?.link === value);
          duplicatedList && checkDuplicate++;
        }
      }
      return checkDuplicate > 0 ? false : true;
    };

    const formik = useFormik({
      initialValues: {
        btnName: "",
        btnLink: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
        let currenBox = boxList.find((box) => box?.id === props.boxId);
        let btnNameList = currenBox?.buttons;
        if (btnNameList) {
          currenBox.buttons.unshift({
            id: uuidv4(),
            label: values["btnName"],
            link: values["btnLink"],
            image: {
              id: 1,
              url: "https://my.medu.ir/assets/img/pages/student/icons/estelamshahrie.png",
            },
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

export default withAddButtonOfDashedBoxFormik;
