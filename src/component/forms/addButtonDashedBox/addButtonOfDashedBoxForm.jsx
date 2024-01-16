import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import withAddButtonOfDashedBoxFormik from "../../hoc/withAddButtonOfDashedBoxFormik";
import { Stack } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import UiModal from "../../uiKit/uiModal/uiModal";

const AddButtonOfDashedBox = ({
  formik,
  interfaceUI,
  setInterfaceUI,
  activeAddButtonDashedForm,
  setActiveAddButtonDashedForm,
  id,
}) => {
  const [t] = useTranslation();
  const [image, setImage] = React.useState("");
  const [uploadState, setUploadState] = React.useState("initial");

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        setImage(reader.result);
        setUploadState("uploaded");
      };
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        spacing={3}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <UiInputText
          formik={formik}
          //onChange={(e) => setBoxName(e?.target?.value)}
          id="btnName"
          name="btnName"
          label={t("dashboard.main.buttonName")}
          value={formik.values.btnName}
          onChange={formik.handleChange}
          error={formik.touched.btnName && Boolean(formik.errors.btnName)}
          helperText={formik.touched.btnName && formik.errors.btnName}
        />
        <UiInputText
          formik={formik}
          //onChange={(e) => setBoxName(e?.target?.value)}
          id="btnLink"
          name="btnLink"
          label={t("dashboard.main.link")}
          value={formik.values.btnLink}
          onChange={formik.handleChange}
          error={formik.touched.btnLink && Boolean(formik.errors.btnLink)}
          helperText={formik.touched.btnLink && formik.errors.btnLink}
        />

        <input
          accept="image/jpeg,image/png,image/tiff,image/webp"
          id="contained-button-file"
          name="dfdsf"
          //ref={register({ required: true })}
          type="file"
          onChange={handleUploadClick}
        />
        <UiButton
          type="submit"
          label={"افزودن"}
          variant={"contained"}
          sx={{ width: "50%" }}
        />
      </Stack>
    </form>
  );
};

export default withAddButtonOfDashedBoxFormik(AddButtonOfDashedBox);
