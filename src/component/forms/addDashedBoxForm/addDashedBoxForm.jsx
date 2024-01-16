import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import WithAddDashedBoxFormik from "../../hoc/withAddDashedBoxFormik";
import { Stack } from "@mui/material";
import UiInputText from "../../uiKit/uiInput/uiInput";
import UiButton from "../../uiKit/uiButton/uiButton";
import { v4 as uuidv4 } from "uuid";

const AddDashedBoxForm = ({
  formik,
  interfaceUI,
  setInterfaceUI,
  toggleShowModal,
}) => {
  const [t] = useTranslation();

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
          id="boxName"
          name="boxName"
          label={t("dashboard.main.boxName")}
          value={formik.values.boxName}
          onChange={formik.handleChange}
          error={formik.touched.boxName && Boolean(formik.errors.boxName)}
          helperText={formik.touched.boxName && formik.errors.boxName}
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

export default WithAddDashedBoxFormik(AddDashedBoxForm);
