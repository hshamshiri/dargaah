import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const withAddButtonOfDashedBoxFormik = (WrappedComponent) => {
  const FormikChecked = (props) => {
    const [t] = useTranslation();
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
          props?.buttonInfo?.image ? true : value && value.size <= MAX_FILE_SIZE
        ),
    });

    const checkDuplicateName = (value) => {
      let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
      let currenBox = boxList.find((box) => box?.id === props.boxInfo.id);
      let btnNameList = currenBox?.buttons;
      let duplicateName = btnNameList?.filter((el) => {
        if (props?.buttonInfo) {
          return el?.id !== props?.buttonInfo?.id && el?.label === value;
        } else {
          return el?.label === value;
        }
      });
      return duplicateName?.length > 0 ? false : true;
    };
    const checkDuplicateLink = (value) => {
      let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
      let currenBox = boxList.find((box) => box?.id === props.boxInfo.id);
      let btnNameList = currenBox?.buttons;
      let duplicateName = btnNameList?.filter((el) => {
        if (props?.buttonInfo) {
          return el?.id !== props?.buttonInfo?.id && el?.link === value;
        } else {
          return el?.link === value;
        }
      });
      return duplicateName?.length > 0 ? false : true;

      // <--check buttons of all box-->
      // let checkDuplicate = 0;
      // for (const i in boxList) {
      //   const btnList = boxList[i]?.buttons;
      //   if (btnList.length > 0) {
      //     let duplicatedList = btnList.find((btn) => btn?.link === value);
      //     duplicatedList && checkDuplicate++;
      //   }
      // }
      // return checkDuplicate > 0 ? false : true;
    };

    const formik = useFormik({
      initialValues: {
        btnName: props["buttonInfo"] ? props["buttonInfo"]["label"] : "",
        btnLink: props["buttonInfo"] ? props["buttonInfo"]["link"] : "",
        file: {},
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        let boxList = props?.interfaceUI?.dashedBorderContainers?.dashBoxes;
        let currenBox = boxList.find((box) => box?.id === props?.boxInfo?.id);

        if (props?.buttonInfo) {
          //edit buttonlable
          let currentButton = currenBox?.buttons.find(
            (btn) => btn?.id === props?.buttonInfo?.id
          );
          currentButton.label = values["btnName"];
          currentButton.link = values["btnLink"];

          console.log(
            "ffffff",
            values?.file && Object.keys(values?.file).length === 0
          );
          if (values?.file && Object.keys(values?.file).length === 0) {
            currentButton.image = { localUrl: values.file };
          } else {
            currentButton.image = props?.buttonInfo?.image;
          }
          console.log("after edit", currentButton);
        } else {
          //new button
          if (currenBox?.buttons) {
            currenBox.buttons.unshift({
              id: uuidv4(),
              label: values["btnName"],
              link: values["btnLink"],
              image: {
                localUrl: values?.file,
              },
            });
          } else {
            //input required
          }
        }
        props.setInterfaceUI(props?.interfaceUI);
        props.toggleShowModal(false);
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
